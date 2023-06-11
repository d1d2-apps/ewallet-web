import { useForm } from 'react-hook-form';
import { FiUser, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as yup from 'yup';

import { Button } from '@/components/elements';
import { ControlledColorInput, ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { CreateDebtorDTO, useCreateDebtor } from '../../api/createDebtor';
import { useUpdateDebtor } from '../../api/updateDebtor';
import { Debtor } from '../../types';
import * as S from './CreateDebtorModal.styles';

type FormData = CreateDebtorDTO['data'];

export interface CreateDebtorModalProps {
  debtor?: Debtor;
  onSuccess?: () => void | Promise<void>;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório').min(3, 'Mínimo de 3 caracteres'),
    color: yup.string().required('Cor é orbigatória')
  })
  .required();

export function CreateDebtorModal({
  debtor,
  onSuccess,
  ...rest
}: CreateDebtorModalProps & DialogPrimitive.DialogProps) {
  const alertDialog = useAlertDialog();
  const createDebtorMutation = useCreateDebtor();
  const updateDebtorMutation = useUpdateDebtor();

  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      name: debtor?.name || '',
      color: debtor?.color || '#6b7280'
    },
    resolver: yupResolver(validationSchema)
  });

  const handleSaveDebtor = async (formData: FormData) => {
    try {
      if (debtor?.id) {
        await updateDebtorMutation.mutateAsync({ data: formData, debtorId: debtor.id });
      } else {
        await createDebtorMutation.mutateAsync({ data: formData });
      }

      toast.success('Devedor salvo com sucesso.');

      if (onSuccess) {
        await onSuccess();
      }
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
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content asChild>
          <form onSubmit={handleSubmit(handleSaveDebtor)}>
            <header>
              <S.Title>{debtor?.id ? 'Editar' : 'Cadastrar'} devedor</S.Title>

              <DialogPrimitive.Close asChild>
                <Button size="xs" colorScheme="neutral" isRounded>
                  <FiX />
                </Button>
              </DialogPrimitive.Close>
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
              <DialogPrimitive.Close asChild>
                <Button
                  colorScheme="white"
                  size="sm"
                  disabled={createDebtorMutation.isLoading || updateDebtorMutation.isLoading}
                >
                  Fechar
                </Button>
              </DialogPrimitive.Close>

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
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
