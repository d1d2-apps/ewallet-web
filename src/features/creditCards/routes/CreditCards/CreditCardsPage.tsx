import { Plus } from '@phosphor-icons/react';

import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { PageTitle } from '@/components/page-elements';

import { CreditCardsList } from '../../components/CreditCardsList/CreditCardsList';
import { useCreateCreditCardModal } from '../../hooks/useCreateCreditCardModal';
import * as S from './CreditCardsPage.styles';

export function CreditCardsPage() {
  const createCreditCardModal = useCreateCreditCardModal();

  const handleShowCreateCreditCardsModal = () => {
    createCreditCardModal.show();
  };

  return (
    <>
      <Head title="Cartões de crédito" />

      <S.Container>
        <PageTitle title="Cartões de crédito" subtitle="Gerencie todos os seus cartões de crédito ou cadastre um novo.">
          <Button leftIcon={Plus} onClick={handleShowCreateCreditCardsModal}>
            Cadastrar cartão
          </Button>
        </PageTitle>

        <CreditCardsList />
      </S.Container>
    </>
  );
}
