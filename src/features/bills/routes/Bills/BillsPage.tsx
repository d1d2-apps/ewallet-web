import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import * as S from './BillsPage.styles';

export function BillsPage() {
  return (
    <S.Container>
      <header>
        <div>
          <Heading>Faturas</Heading>
          <Heading variant="h4" asChild>
            <h4>Gerencie todos as suas faturas ou faça novos lançamentos.</h4>
          </Heading>
        </div>

        <Button leftIcon={FiPlus}>Lançar fatura</Button>
      </header>
    </S.Container>
  );
}
