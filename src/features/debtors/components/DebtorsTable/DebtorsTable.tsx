import { format } from 'date-fns';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { Button, Table } from '@/components/elements';

import { Debtor } from '../../types';

import * as S from './DebtorsTable.styles';

interface DebtorsTableProps {
  data: Debtor[];
}

export function DebtorsTable({ data }: DebtorsTableProps) {
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
            <S.NameTableCell color={debtor.color}>
              <div>
                <div />
                <span>{debtor.name}</span>
              </div>
            </S.NameTableCell>

            <td align="center">{format(new Date(debtor.createdAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <td align="center">{format(new Date(debtor.updatedAt), "dd/MM/yyy 'às' HH:mm")}</td>

            <S.ActionsTableCell>
              <div>
                <Button size="xs" colorScheme="gray" isRounded title="Editar devedor">
                  <FiEdit2 />
                </Button>

                <Button size="xs" colorScheme="gray" isRounded title="Excluir devedor">
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
