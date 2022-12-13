import NiceModal, { useModal } from '@ebay/nice-modal-react';
import * as Dialog from '@radix-ui/react-dialog';
import { FiUser, FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useAlertDialog } from '@/hooks';

import { Button } from '@/components/elements';
import { ControlledColorInput, ControlledTextInput } from '@/components/forms';

import { theme } from '@/config/styles/theme';
import { useCreateDebtor } from '../../api/createDebtor';
import { Debtor } from '../../types';

import * as S from './CreateDebtorModal.styles';

interface FormData {
  name: string;
  color: string;
}

interface CreateDebtorModalProps {
  onSuccess: (createdDebtor: Debtor) => void;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório').min(5, 'Mínimo de 5 caracteres'),
    color: yup.string().required('Cor é orbigatória')
  })
  .required();

export const CreateDebtorModal = NiceModal.create<CreateDebtorModalProps>(({ onSuccess }) => {
  const modal = useModal();

  const alertDialog = useAlertDialog();
  const createDebtorMutation = useCreateDebtor();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      color: theme.colors.gray[500]
    }
  });

  const handleCloseModal = async () => {
    await modal.hide();
    modal.remove();
  };

  const handleSaveDebtor = async (formData: FormData) => {
    try {
      const createdDebtor = await createDebtorMutation.mutateAsync({ data: formData });

      toast.success('Perfil atualizado com sucesso.');

      onSuccess(createdDebtor);

      await handleCloseModal();
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível criar o devedor',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  return (
    <Dialog.Root open={modal.visible}>
      <Dialog.Portal>
        <S.Overlay />

        <S.Content asChild>
          <form onSubmit={handleSubmit(handleSaveDebtor)}>
            <header>
              <S.Title>Cadastrar devedor</S.Title>

              <Button size="xs" colorScheme="gray" isRounded onClick={handleCloseModal}>
                <FiX />
              </Button>
            </header>

            <main>
              <ControlledTextInput
                name="name"
                control={control}
                label="Nome"
                icon={FiUser}
                placeholder="Fulano de Tal"
              />

              <ControlledColorInput name="color" control={control} label="Cor" />
            </main>

            <footer>
              <Dialog.Close asChild>
                <Button colorScheme="white" size="sm" onClick={handleCloseModal}>
                  Fechar
                </Button>
              </Dialog.Close>

              <Button type="submit" size="sm" isLoading={isSubmitting} loadingText="Salvando...">
                Salvar
              </Button>
            </footer>
          </form>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

export function useCreateDebtorModal() {
  const show = async (props: CreateDebtorModalProps) => {
    await NiceModal.show(CreateDebtorModal, props);
  };

  return { show };
}
