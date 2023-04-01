import { ChangeEvent, useRef } from 'react';
import { FiCamera } from 'react-icons/fi';
import { toast } from 'react-toastify';

import personPlaceholderImg from '@/assets/images/person-placeholder.png';
import { Button, Tooltip } from '@/components/elements';
import { useAuth } from '@/features/auth';
import { useAlertDialog } from '@/hooks';

import { useChangeProfilePicture } from '../../api/changePicture';
import * as S from './ChangeProfilePictureForm.styles';

export function ChangeProfilePictureForm() {
  const { user } = useAuth();
  const alertDialog = useAlertDialog();
  const changeProfilePictureMutation = useChangeProfilePicture();

  const inputRef = useRef<HTMLInputElement>(null);

  const handlePickPicture = () => {
    inputRef.current?.click();
  };

  const handlePictureChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files?.length) {
      const data = { picture: files[0] };

      try {
        await changeProfilePictureMutation.mutateAsync({ data });
        toast.success('Foto de perfil atualizado com sucesso.');
      } catch (err) {
        console.log(err);

        alertDialog.show({
          type: 'error',
          title: 'Não foi possível atualizar sua foto de perfil',
          description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
          okButtonLabel: 'Fechar'
        });
      }
    }
  };

  return (
    <S.Container>
      <img src={user?.picture || personPlaceholderImg} alt={`${user?.name || 'User'}'s profile`} />

      <input
        ref={inputRef}
        type="file"
        id="avatar"
        onChange={handlePictureChange}
        data-testid="profile-picture-input"
      />

      <Tooltip content="Alterar foto de perfil" side="bottom">
        <Button
          colorScheme="white"
          isRounded
          onClick={handlePickPicture}
          isLoading={changeProfilePictureMutation.isLoading}
        >
          <FiCamera />
        </Button>
      </Tooltip>
    </S.Container>
  );
}
