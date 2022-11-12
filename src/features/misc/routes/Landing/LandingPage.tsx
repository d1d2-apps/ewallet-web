import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '@/components/elements';

import * as S from './LandingPage.styles';

export function LandingPage() {
  return (
    <S.Container>
      <S.Header>
        <h1>eWallet</h1>

        <Link to="/auth/sign-in">
          <FiLogIn />
          Iniciar sessão
        </Link>
      </S.Header>

      <S.Hero>
        <div>
          <h2>
            Venha conhecer
            <br />o <strong>eWallet Finanças</strong>
          </h2>

          <p>
            Encontre as melhores ferramentas e soluções para organizar suas finanças de forma eficiente e alcançar os
            melhores resultados.
          </p>

          <Button>Cadastre-se</Button>
        </div>

        <S.HeroImage />
      </S.Hero>
    </S.Container>
  );
}
