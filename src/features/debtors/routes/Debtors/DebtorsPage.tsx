import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import { DebtorsTable } from '../../components/DebtorsTable/DebtorsTable';

import * as S from './DebtorsPage.styles';

export function DebtorsPage() {
  return (
    <S.Container>
      <header>
        <div>
          <Heading>Devedores</Heading>
          <Heading variant="h4" asChild>
            <h4>Gerencie todos os seus devedores ou cadastre um novo.</h4>
          </Heading>
        </div>

        <Button leftIcon={FiPlus}>Cadastrar devedor</Button>
      </header>

      <DebtorsTable />
    </S.Container>
  );
}
