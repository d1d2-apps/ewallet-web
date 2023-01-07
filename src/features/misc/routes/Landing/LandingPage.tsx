import { FiLogIn, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '@/assets/images/logo.png';
import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { useColorModeValue } from '@/hooks';
import { useAuth } from '@/stores/auth';
import { useColorMode } from '@/stores/colorMode';

import * as S from './LandingPage.styles';

export function LandingPage() {
  const { user } = useAuth();
  const { toggleColorMode } = useColorMode();

  const colorModeButtonConfig = {
    title: useColorModeValue('Habilitar modo escuro', 'Habilitar modo claro'),
    icon: useColorModeValue(<FiMoon />, <FiSun />)
  };

  return (
    <>
      <Head title="Bem vindo" />

      <S.Container>
        <S.Header>
          <div>
            <img src={logoImg} alt="eWallet Logo" />
            <h1>eWallet</h1>
          </div>

          <div>
            <Button
              colorScheme="white"
              size="sm"
              isRounded
              title={colorModeButtonConfig.title}
              onClick={toggleColorMode}
            >
              {colorModeButtonConfig.icon}
            </Button>

            <Link to={user ? '/app/profile' : '/auth/sign-in'}>
              <FiLogIn />
              {user ? 'Acessar plataforma' : 'Iniciar sessão'}
            </Link>
          </div>
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
              <Link to={user ? '/app/profile' : '/auth/sign-up'}>{user ? 'Acessar plataforma' : 'Cadastre-se'}</Link>
            </Button>
          </div>

          <S.HeroImage />
        </S.Hero>
      </S.Container>
    </>
  );
}
