import { EmptyFeedback, LoadingFeedback } from '@/components/feedbacks';

import { useDebtors } from '../../api/getDebtors';
import debtorsImg from '../../assets/images/debtors.png';
import { DebtorsTable } from '../DebtorsTable/DebtorsTable';

export function DebtorsList() {
  const debtorsQuery = useDebtors();

  if (debtorsQuery.isLoading || debtorsQuery.isFetching) {
    return <LoadingFeedback title="Carregando devedores..." />;
  }

  if (!debtorsQuery.data?.length) {
    return (
      <EmptyFeedback
        image={debtorsImg}
        title="Ooops! Está vazio"
        description="Parece que você não tem nenhum devedor cadastrado."
      />
    );
  }

  return <DebtorsTable data={debtorsQuery.data} />;
}
