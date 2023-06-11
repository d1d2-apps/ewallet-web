import { useForm } from 'react-hook-form';
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Modal, ModalProps } from '@/components/elements';
import { ControlledColorInput, ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { CreateDebtorDTO, useCreateDebtor } from '../../api/createDebtor';
import { useUpdateDebtor } from '../../api/updateDebtor';
import { Debtor } from '../../types';

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

export function CreateDebtorModal({ debtor, onSuccess, ...rest }: CreateDebtorModalProps & ModalProps) {
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
    <Modal.Root {...rest} asChild>
      <form onSubmit={handleSubmit(handleSaveDebtor)}>
        <Modal.Header title={`${debtor?.id ? 'Editar' : 'Cadastrar'} devedor`} />

        <Modal.Body>
          <ControlledTextInput name="name" control={control} label="Nome" icon={FiUser} placeholder="Fulano de Tal" />

          <ControlledColorInput name="color" control={control} label="Cor" />
        </Modal.Body>

        <Modal.Footer
          closeButtonOptions={{
            disabled: createDebtorMutation.isLoading || updateDebtorMutation.isLoading
          }}
          primaryButtonOptions={{
            type: 'submit',
            title: 'Salvar',
            isLoading: createDebtorMutation.isLoading || updateDebtorMutation.isLoading,
            loadingText: 'Salvando...'
          }}
        />
      </form>
    </Modal.Root>
  );
}
