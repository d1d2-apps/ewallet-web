import { Button } from '@/components/elements';
import { PageTitle } from '@/components/page-elements';

import * as S from './CreateBillPage.styles';

export function CreateBillPage() {
  return (
    <S.Container>
      <PageTitle
        title="Lançamento de fatura"
        subtitle={`Preencha todos os campos e clique em "Avançar" para ir para a próxima etapa.`}
        showGoBackButton
      >
        <Button>Lançar fatura</Button>
      </PageTitle>
    </S.Container>
  );
}
