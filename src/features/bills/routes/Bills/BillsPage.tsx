import { Link } from 'react-router-dom';

import { Plus } from '@phosphor-icons/react';

import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { PageTitle } from '@/components/page-elements';

import { BillsList } from '../../components/BillsList/BillsList';
import * as S from './BillsPage.styles';

export function BillsPage() {
  return (
    <>
      <Head title="Faturas" />

      <S.Container>
        <PageTitle title="Faturas" subtitle="Gerencie todos as suas faturas ou faça novos lançamentos.">
          <Button asChild>
            <Link to="./create">
              <Plus />
              Lançar fatura
            </Link>
          </Button>
        </PageTitle>

        <BillsList />
      </S.Container>
    </>
  );
}
