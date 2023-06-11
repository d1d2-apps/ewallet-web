import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { CreditCard as CreditCardIcon } from '@phosphor-icons/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as yup from 'yup';

import { Dialog } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { CreateCreditCardDTO, useCreateCreditCard } from '../../api/createCreditCard';
import { useUpdateCreditCard } from '../../api/updateCreditCard';
import { CreditCard } from '../../types';

type FormData = CreateCreditCardDTO['data'];

export interface CreateCreditCardModalProps {
  creditCard?: CreditCard;
  onSuccess?: () => void | Promise<void>;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório').min(3, 'Mínimo de 3 caracteres')
  })
  .required();

export function CreateCreditCardModal({
  creditCard,
  onSuccess,
  ...rest
}: CreateCreditCardModalProps & DialogPrimitive.DialogProps) {
  const alertDialog = useAlertDialog();
  const createCreditCardMutation = useCreateCreditCard();
  const updateCreditCardMutation = useUpdateCreditCard();

  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      name: creditCard?.name || ''
    },
    resolver: yupResolver(validationSchema)
  });

  const handleSaveCreditCard = async (formData: FormData) => {
    try {
      if (creditCard?.id) {
        await updateCreditCardMutation.mutateAsync({ data: formData, creditCardId: creditCard.id });
      } else {
        await createCreditCardMutation.mutateAsync({ data: formData });
      }

      toast.success('Cartão de crédito salvo com sucesso.');

      if (onSuccess) {
        await onSuccess();
      }
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível salvar o cartão de crédito',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  return (
    <Dialog.Root {...rest} asChild>
      <form onSubmit={handleSubmit(handleSaveCreditCard)}>
        <Dialog.Header title={`${creditCard?.id ? 'Editar' : 'Cadastrar'} cartão de crédito`} />

        <Dialog.Body>
          <ControlledTextInput
            name="name"
            control={control}
            label="Nome"
            icon={CreditCardIcon}
            placeholder="Ex.: Nubank, Inter, Itaú..."
          />
        </Dialog.Body>

        <Dialog.Footer
          closeButtonOptions={{
            disabled: createCreditCardMutation.isLoading || updateCreditCardMutation.isLoading
          }}
          primaryButtonOptions={{
            isLoading: createCreditCardMutation.isLoading || updateCreditCardMutation.isLoading,
            loadingText: 'Salvando...'
          }}
        />
      </form>
    </Dialog.Root>
  );
}
