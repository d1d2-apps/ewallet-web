import { EmptyFeedback, LoadingFeedback } from '@/components/feedbacks';

import { useBills } from '../../api/getBills';
import billsImg from '../../assets/images/bills.png';

export function BillsList() {
  const billsQuery = useBills();

  if (billsQuery.isLoading || billsQuery.isFetching) {
    return <LoadingFeedback title="Carregando faturas..." />;
  }

  if (!billsQuery.data?.length) {
    return (
      <EmptyFeedback
        image={billsImg}
        title="Ooops! Está vazio"
        description="Parece que você não tem nenhuma fatura lançada ainda."
      />
    );
  }

  // return <BillsTable data={billsQuery.data} />;
  return <h3>BillsTable</h3>;
}
