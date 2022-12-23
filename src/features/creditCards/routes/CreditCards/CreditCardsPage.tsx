import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import { CreditCardsList } from '../../components/CreditCardsList/CreditCardsList';

import * as S from './CreditCardsPage.styles';

export function CreditCardsPage() {
  return (
    <S.Container>
      <header>
        <div>
          <Heading>Cartões de crédito</Heading>
          <Heading variant="h4" asChild>
            <h4>Gerencie todos os seus cartões de crédito ou cadastre um novo.</h4>
          </Heading>
        </div>

        <Button leftIcon={FiPlus}>Cadastrar cartão</Button>
      </header>

      <CreditCardsList />
    </S.Container>
  );
}
