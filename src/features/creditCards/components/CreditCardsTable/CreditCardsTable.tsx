import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { format } from 'date-fns';

import { Button, Table, Tooltip } from '@/components/elements';
import { useAlertDialog, useConfirmationDialog } from '@/hooks';

import { useDeleteCreditCard } from '../../api/deleteCreditCard';
import { useCreateCreditCardModal } from '../../hooks/useCreateCreditCardModal';
import { CreditCard } from '../../types';
import * as S from './CreditCardsTable.styles';

interface CreditCardsTableProps {
  data: CreditCard[];
}

export function CreditCardsTable({ data }: CreditCardsTableProps) {
  const alertDialog = useAlertDialog();
  const confirmationDialog = useConfirmationDialog();
  const createCreditCardModal = useCreateCreditCardModal();
  const deleteCreditCardMutation = useDeleteCreditCard();

  const deleteCreditCard = async (creditCardId: string) => {
    try {
      await deleteCreditCardMutation.mutateAsync({ creditCardId });

      toast.success('Cartão de crédito excluído com sucesso.');
    } catch (err) {
      alertDialog.show({
        type: 'error',
        title: 'Não foi possível excluir o cartão de crédito',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  const handleDeleteCreditCardClick = async (creditCard: CreditCard) => {
    confirmationDialog.show({
      title: 'Excluir cartão de crédito',
      description: `Tem certeza que desenha excluir o cartão de crédito "${creditCard.name}"?`,
      okButtonLabel: 'Excluir',
      okButtonLoadingText: 'Excluindo...',
      onConfirm: () => deleteCreditCard(creditCard.id)
    });
  };

  const handleEditCreditCardClick = (creditCard: CreditCard) => {
    createCreditCardModal.show({ creditCard });
  };

  return (
    <Table.Root>
      <Table.Head>
        <tr>
          <th>Nome</th>
          <th align="center">Criado em</th>
          <th align="center">Última atualização</th>
          <th align="right">Ações</th>
        </tr>
      </Table.Head>

      <Table.Body>
        {data.map(creditCard => (
          <tr key={creditCard.id}>
            <td>{creditCard.name}</td>

            <S.NeutralTableCell>{format(new Date(creditCard.createdAt), "dd/MM/yyy 'às' HH:mm")}</S.NeutralTableCell>

            <S.NeutralTableCell>{format(new Date(creditCard.updatedAt), "dd/MM/yyy 'às' HH:mm")}</S.NeutralTableCell>

            <S.ActionsTableCell>
              <div>
                <Tooltip content="Editar cartão de crédito">
                  <Button
                    size="xs"
                    colorScheme="neutral"
                    isRounded
                    onClick={() => handleEditCreditCardClick(creditCard)}
                    title={`Editar cartão ${creditCard.name}`}
                  >
                    <FiEdit2 />
                  </Button>
                </Tooltip>

                <Tooltip content="Excluir cartão de crédito">
                  <Button
                    size="xs"
                    colorScheme="neutral"
                    isRounded
                    onClick={() => handleDeleteCreditCardClick(creditCard)}
                    title={`Excluir cartão ${creditCard.name}`}
                  >
                    <FiTrash2 />
                  </Button>
                </Tooltip>
              </div>
            </S.ActionsTableCell>
          </tr>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
