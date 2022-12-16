import { Spinner } from '@/components/elements';
import { EmptyFeedback } from '@/components/feedbacks';

import { useDebtors } from '../../api/getDebtors';

import { DebtorsTable } from '../DebtorsTable/DebtorsTable';

import debtorsImg from '../../assets/images/debtors.png';

function LoadingFeedback() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="2xl" />
    </div>
  );
}

export function DebtorsList() {
  const debtorsQuery = useDebtors();

  if (debtorsQuery.isLoading || debtorsQuery.isFetching) {
    return <LoadingFeedback />;
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
