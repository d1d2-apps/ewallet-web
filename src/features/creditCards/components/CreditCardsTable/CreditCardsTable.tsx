import { format } from 'date-fns';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { Button, Table, Tooltip } from '@/components/elements';

import { CreditCard } from '../../types';

import * as S from './CreditCardsTable.styles';

interface CreditCardsTableProps {
  data: CreditCard[];
}

export function CreditCardsTable({ data }: CreditCardsTableProps) {
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
                <Tooltip content="Editar devedor">
                  <Button size="xs" colorScheme="neutral" isRounded>
                    <FiEdit2 />
                  </Button>
                </Tooltip>

                <Tooltip content="Excluir devedor">
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
