import { format } from 'date-fns';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { Button, Table, Tooltip } from '@/components/elements';

import { CreditCard } from '../../types';

import { useCreateCreditCardModal } from '../CreateCreditCardModal/CreateCreditCardModal';

import * as S from './CreditCardsTable.styles';

interface CreditCardsTableProps {
  data: CreditCard[];
}

export function CreditCardsTable({ data }: CreditCardsTableProps) {
  const createCreditCardModal = useCreateCreditCardModal();

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

            <td align="center">{format(new Date(creditCard.createdAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <td align="center">{format(new Date(creditCard.updatedAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <S.ActionsTableCell>
              <div>
                <Tooltip content="Editar cartão de crédito">
                  <Button
                    size="xs"
                    colorScheme="neutral"
                    isRounded
                    onClick={() => handleEditCreditCardClick(creditCard)}
                  >
                    <FiEdit2 />
                  </Button>
                </Tooltip>

                <Tooltip content="Excluir cartão de crédito">
                  <Button size="xs" colorScheme="neutral" isRounded>
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
