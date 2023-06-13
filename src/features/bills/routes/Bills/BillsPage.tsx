import { Plus } from '@phosphor-icons/react';

import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { PageTitle } from '@/components/page-elements';

import { BillsList } from '../../components/BillsList/BillsList';
import { useCreateBillModal } from '../../hooks/useCreateBillForm';
import { useSelectBillCategoryModal } from '../../hooks/useSelectBillCategoryModal';
import * as S from './BillsPage.styles';

export function BillsPage() {
  const createBillModal = useCreateBillModal();
  const selectBillCategoryModal = useSelectBillCategoryModal();

  const handleShowCreateBillModal = async () => {
    await createBillModal.show();
  };

  return (
    <>
      <Head title="Faturas" />

      <S.Container>
        <PageTitle title="Faturas" subtitle="Gerencie todos as suas faturas ou faça novos lançamentos.">
          <Button leftIcon={Plus} onClick={handleShowCreateBillModal}>
            Lançar fatura
          </Button>
        </PageTitle>

        <BillsList />
      </S.Container>
    </>
  );
}
