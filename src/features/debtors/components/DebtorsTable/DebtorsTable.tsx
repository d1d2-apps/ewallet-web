import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { useAlertDialog, useConfirmationDialog } from '@/hooks';

import { Button, Table } from '@/components/elements';

import { useDeleteDebtor } from '../../api/deleteDebtor';

import { Debtor } from '../../types';

import { useCreateDebtorModal } from '../CreateDebtorModal/CreateDebtorModal';

import * as S from './DebtorsTable.styles';

interface DebtorsTableProps {
  data: Debtor[];
}

export function DebtorsTable({ data }: DebtorsTableProps) {
  const alertDialog = useAlertDialog();
  const confirmationDialog = useConfirmationDialog();
  const createDebtorModal = useCreateDebtorModal();
  const deleteDebtorMutation = useDeleteDebtor();

  const deleteDebtor = async (debtorId: string) => {
    try {
      await deleteDebtorMutation.mutateAsync({ debtorId });

      toast.success('Devedor excluído com sucesso.');
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível excluir o devedor',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  const handleDeleteDebtorClick = async (debtor: Debtor) => {
    confirmationDialog.show({
      title: 'Excluir devedor',
      description: `Tem certeza que desenha excluir o devedor "${debtor.name}"?`,
      okButtonLabel: 'Excluir',
      okButtonLoadingText: 'Excluindo...',
      onConfirm: () => deleteDebtor(debtor.id)
    });
  };

  const handleEditDebtorClick = (debtor: Debtor) => {
    createDebtorModal.show({ debtor });
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
        {data.map(debtor => (
          <tr key={debtor.id}>
            <S.NameTableCell $color={debtor.color}>
              <div>
                <div />
                <span>{debtor.name}</span>
              </div>
            </S.NameTableCell>

            <td align="center">{format(new Date(debtor.createdAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <td align="center">{format(new Date(debtor.updatedAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <S.ActionsTableCell>
              <div>
                <Button
                  size="xs"
                  colorScheme="gray"
                  isRounded
                  title="Editar devedor"
                  onClick={() => handleEditDebtorClick(debtor)}
                >
                  <FiEdit2 />
                </Button>

                <Button
                  size="xs"
                  colorScheme="gray"
                  isRounded
                  title="Excluir devedor"
                  onClick={() => handleDeleteDebtorClick(debtor)}
                >
                  <FiTrash2 />
                </Button>
              </div>
            </S.ActionsTableCell>
          </tr>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
