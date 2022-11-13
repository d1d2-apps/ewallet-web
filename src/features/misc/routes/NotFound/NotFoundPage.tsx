import pageNotFoundImg from '../../assets/images/page-not-found.png';

import * as S from './NotFoundPage.styles';

export function NotFoundPage() {
  return (
    <S.Container>
      <img src={pageNotFoundImg} alt="Página não encontrada" />

      <div>
        <h2>Página não encontrada</h2>
        <p>Não encontramos a página que está tentando acessar. Por favor, tente outra opção.</p>
      </div>
    </S.Container>
  );
}
