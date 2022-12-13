import { Spinner } from '@/components/elements';

import { useDebtors } from '../../api/getDebtors';

import { DebtorsTable } from '../DebtorsTable/DebtorsTable';

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
    return <h1>Nenhum devedor</h1>;
  }

  return <DebtorsTable data={debtorsQuery.data} />;
}
