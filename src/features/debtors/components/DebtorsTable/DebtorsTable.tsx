import { Button, Table } from '@/components/elements';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import * as S from './DebtorsTable.styles';

export function DebtorsTable() {
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
        <tr>
          <S.NameTableCell color="red">
            <div>
              <div />
              <span>Diego Ferreira</span>
            </div>
          </S.NameTableCell>
          <td align="center">04/12/20222</td>
          <td align="center">04/12/2022</td>
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
      </Table.Body>
    </Table.Root>
  );
}
