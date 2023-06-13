import { Plus } from '@phosphor-icons/react';

import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { PageTitle } from '@/components/page-elements';

import { DebtorsList } from '../../components/DebtorsList/DebtorsList';
import { useCreateDebtorModal } from '../../hooks/useCreateDebtorModal';
import * as S from './DebtorsPage.styles';

export function DebtorsPage() {
  const createDebtorsModal = useCreateDebtorModal();

  const handleShowCreateDebtorsModal = () => {
    createDebtorsModal.show();
  };

  return (
    <>
      <Head title="Devedores" />

      <S.Container>
        <PageTitle title="Devedores" subtitle="Gerencie todos os seus devedores ou cadastre um novo.">
          <Button leftIcon={Plus} onClick={handleShowCreateDebtorsModal}>
            Cadastrar devedor
          </Button>
        </PageTitle>

        <DebtorsList />
      </S.Container>
    </>
  );
}
