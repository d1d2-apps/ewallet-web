import { useForm } from 'react-hook-form';
import { FiUser, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Dialog from '@radix-ui/react-dialog';
import * as yup from 'yup';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { CreateCreditCardDTO, useCreateCreditCard } from '../../api/createCreditCard';
import { useUpdateCreditCard } from '../../api/updateCreditCard';
import { CreditCard } from '../../types';
import * as S from './CreateCreditCardModal.styles';

type FormData = CreateCreditCardDTO['data'];

interface CreateCreditCardModalProps {
  creditCard?: CreditCard;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório').min(3, 'Mínimo de 3 caracteres')
  })
  .required();

export const CreateCreditCardModal = NiceModal.create<CreateCreditCardModalProps>(({ creditCard }) => {
  const modal = useModal();

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

      await modal.hide();
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
    <Dialog.Root open={modal.visible} onOpenChange={open => !open && modal.remove()}>
      <Dialog.Portal>
        <S.Overlay />

        <S.Content asChild>
          <form onSubmit={handleSubmit(handleSaveCreditCard)}>
            <header>
              <S.Title>{creditCard?.id ? 'Editar' : 'Cadastrar'} cartão de crédito</S.Title>

              <Dialog.Close asChild>
                <Button size="xs" colorScheme="neutral" isRounded>
                  <FiX />
                </Button>
              </Dialog.Close>
            </header>

            <main>
              <ControlledTextInput
                name="name"
                control={control}
                label="Nome"
                icon={FiUser}
                placeholder="Ex.: Nubank, Inter, Itaú..."
              />
            </main>

            <footer>
              <Dialog.Close asChild>
                <Button
                  colorScheme="white"
                  size="sm"
                  disabled={createCreditCardMutation.isLoading || updateCreditCardMutation.isLoading}
                >
                  Fechar
                </Button>
              </Dialog.Close>

              <Button
                type="submit"
                size="sm"
                isLoading={createCreditCardMutation.isLoading || updateCreditCardMutation.isLoading}
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

export function useCreateCreditCardModal() {
  const show = async (props: CreateCreditCardModalProps = {}) => {
    await NiceModal.show(CreateCreditCardModal, props);
  };

  return { show };
}
