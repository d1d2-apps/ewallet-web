import { useForm } from 'react-hook-form';
import { FiUser, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Dialog from '@radix-ui/react-dialog';
import * as yup from 'yup';

import { Button } from '@/components/elements';
import { ControlledColorInput, ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { useCreateDebtor } from '../../api/createDebtor';
import { useUpdateDebtor } from '../../api/updateDebtor';
import { Debtor } from '../../types';
import * as S from './CreateDebtorModal.styles';

interface FormData {
  name: string;
  color: string;
}

interface CreateDebtorModalProps {
  debtor?: Debtor;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório').min(5, 'Mínimo de 5 caracteres'),
    color: yup.string().required('Cor é orbigatória')
  })
  .required();

export const CreateDebtorModal = NiceModal.create<CreateDebtorModalProps>(({ debtor }) => {
  const modal = useModal();

  const alertDialog = useAlertDialog();
  const createDebtorMutation = useCreateDebtor();
  const updateDebtorMutation = useUpdateDebtor();

  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      name: debtor?.name || '',
      color: debtor?.color || '#6b7280'
    },
    shouldUnregister: true,
    resolver: yupResolver(validationSchema)
  });

  const handleCloseModal = async () => {
    await modal.hide();
    modal.remove();
  };

  const handleSaveDebtor = async (formData: FormData) => {
    try {
      if (debtor?.id) {
        await updateDebtorMutation.mutateAsync({ data: formData, debtorId: debtor.id });
      } else {
        await createDebtorMutation.mutateAsync({ data: formData });
      }

      toast.success('Devedor salvo com sucesso.');

      await handleCloseModal();
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível salvar o devedor',
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
              <S.Title>{debtor?.id ? 'Editar' : 'Cadastrar'} devedor</S.Title>

              <Button size="xs" colorScheme="neutral" isRounded onClick={handleCloseModal}>
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
                <Button
                  colorScheme="white"
                  size="sm"
                  onClick={handleCloseModal}
                  disabled={createDebtorMutation.isLoading || updateDebtorMutation.isLoading}
                >
                  Fechar
                </Button>
              </Dialog.Close>

              <Button
                type="submit"
                size="sm"
                isLoading={createDebtorMutation.isLoading || updateDebtorMutation.isLoading}
                loadingText="Salvando..."
              >
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
  const show = async (props: CreateDebtorModalProps = {}) => {
    await NiceModal.show(CreateDebtorModal, props);
  };

  return { show };
}
