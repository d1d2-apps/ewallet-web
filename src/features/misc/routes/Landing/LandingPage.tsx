import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '@/components/elements';
import { Head } from '@/components/head';

import logoImg from '@/assets/images/logo.png';

import * as S from './LandingPage.styles';

export function LandingPage() {
  return (
    <>
      <Head title="Bem vindo" />

      <S.Container>
        <S.Header>
          <div>
            <img src={logoImg} alt="eWallet Logo" />
            <h1>eWallet</h1>
          </div>

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

            <Button asChild>
              <Link to="/auth/sign-up">Cadastre-se</Link>
            </Button>
          </div>

          <S.HeroImage />
        </S.Hero>
      </S.Container>
    </>
  );
}
