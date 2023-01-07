import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import { useCreateCreditCardModal } from '../../components/CreateCreditCardModal/CreateCreditCardModal';
import { CreditCardsList } from '../../components/CreditCardsList/CreditCardsList';
import * as S from './CreditCardsPage.styles';

export function CreditCardsPage() {
  const createCreditCardModal = useCreateCreditCardModal();

  const handleShowCreateCreditCardsModal = () => {
    createCreditCardModal.show();
  };

  return (
    <S.Container>
      <header>
        <div>
          <Heading>Cartões de crédito</Heading>
          <Heading variant="h4" asChild>
            <h4>Gerencie todos os seus cartões de crédito ou cadastre um novo.</h4>
          </Heading>
        </div>

        <Button leftIcon={FiPlus} onClick={handleShowCreateCreditCardsModal}>
          Cadastrar cartão
        </Button>
      </header>

      <CreditCardsList />
    </S.Container>
  );
}
