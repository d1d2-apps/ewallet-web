import { FiPlus } from 'react-icons/fi';

import { Button, Heading } from '@/components/elements';

import { DebtorsList } from '../../components/DebtorsList/DebtorsList';
import { useCreateDebtorModal } from '../../components/CreateDebtorModal/CreateDebtorModal';

import * as S from './DebtorsPage.styles';

export function DebtorsPage() {
  const createDebtorsModal = useCreateDebtorModal();

  const handleShowCreateDebtorsModal = () => {
    createDebtorsModal.show();
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

      <DebtorsList />
    </S.Container>
  );
}
