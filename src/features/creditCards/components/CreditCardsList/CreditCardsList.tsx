import { EmptyFeedback, LoadingFeedback } from '@/components/feedbacks';

import { useCreditCards } from '../../api/getCreditCards';

import { CreditCardsTable } from '../CreditCardsTable/CreditCardsTable';

import creditCardsImg from '../../assets/images/credit-card.png';

export function CreditCardsList() {
  const creditCardsQuery = useCreditCards();

  if (creditCardsQuery.isLoading || creditCardsQuery.isFetching) {
    return <LoadingFeedback title="Carregando cartões de crédito..." />;
  }

  if (!creditCardsQuery.data?.length) {
    return (
      <EmptyFeedback
        image={creditCardsImg}
        title="Ooops! Está vazio"
        description="Parece que você não tem nenhum cartão de crédito cadastrado."
      />
    );
  }

  return <CreditCardsTable data={creditCardsQuery.data} />;
}
