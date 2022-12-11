import NiceModal, { useModal } from '@ebay/nice-modal-react';
import * as Dialog from '@radix-ui/react-dialog';
import { FiUser, FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import { ControlledColorInput } from '../ControlledColorInput/ControlledColorInput';

import * as S from './CreateDebtorModal.styles';

interface FormData {
  name: string;
  color: string;
}

export const CreateDebtorModal = NiceModal.create(() => {
  const modal = useModal();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm<FormData>({
    // resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      color: 'blue'
    }
  });

  const handleCloseModal = async () => {
    await modal.hide();
    modal.remove();
  };

  const handleSaveDebtor = (formData: FormData) => {
    console.log({ formData });
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
  const show = async () => {
    await NiceModal.show(CreateDebtorModal);
  };

  return { show };
}
