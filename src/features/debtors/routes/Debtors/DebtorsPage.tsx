import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import { Debtor } from '../../types';

import { DebtorsTable } from '../../components/DebtorsTable/DebtorsTable';
import { useCreateDebtorModal } from '../../components/CreateDebtorModal/CreateDebtorModal';

import * as S from './DebtorsPage.styles';

export function DebtorsPage() {
  const createDebtorsModal = useCreateDebtorModal();

  const onCreateDebtorSuccess = (createdDebtor: Debtor) => {
    console.log({ createdDebtor });
  };

  const handleShowCreateDebtorsModal = () => {
    createDebtorsModal.show({
      onSuccess: onCreateDebtorSuccess
    });
  };

  return (
    <S.Container>
      <header>
        <div>
          <Heading>Devedores</Heading>
          <Heading variant="h4" asChild>
            <h4>Gerencie todos os seus devedores ou cadastre um novo.</h4>
          </Heading>
        </div>

        <Button leftIcon={FiPlus} onClick={handleShowCreateDebtorsModal}>
          Cadastrar devedor
        </Button>
      </header>

      <DebtorsTable />
    </S.Container>
  );
}
