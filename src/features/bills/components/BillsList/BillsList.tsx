import { useState } from 'react';

import { EmptyFeedback, LoadingFeedback } from '@/components/feedbacks';

import { GetBillsDTO, useBills } from '../../api/getBills';
import billsImg from '../../assets/images/bills.png';
import { FilterBillsForm } from '../FilterBillsForm/FilterBillsForm';

export function BillsList() {
  const [filterOptions, setFilterOptions] = useState<GetBillsDTO['data']>({
    creditCard: 'all',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });

  const billsQuery = useBills({ params: filterOptions });

  const handleApplyBillsFilter = (filter: GetBillsDTO['data']) => {
    setFilterOptions(filter);
  };

  return (
    <>
      <FilterBillsForm onFilterApply={handleApplyBillsFilter} />

      {(() => {
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
      })()}
    </>
  );
}
