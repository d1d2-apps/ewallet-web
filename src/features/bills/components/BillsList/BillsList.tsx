import { useState } from 'react';

import { Select } from '@/components/elements';
import { EmptyFeedback, LoadingFeedback } from '@/components/feedbacks';

import { useBills } from '../../api/getBills';
import billsImg from '../../assets/images/bills.png';
import * as S from './BillsList.styles';

export function BillsList() {
  const billsQuery = useBills();

  const [selectedCreditCardId, setSelectedCreditCardId] = useState('');

  return (
    <S.Container>
      <Select.Root value={selectedCreditCardId} onValueChange={value => setSelectedCreditCardId(value)}>
        <Select.Group>
          <Select.GroupLabel>Cartão de crédito</Select.GroupLabel>

          <Select.Item value="">Todos</Select.Item>
        </Select.Group>
      </Select.Root>

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
    </S.Container>
  );
}
