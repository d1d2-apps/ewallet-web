import { FiMoon, FiSun } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '@/assets/images/logo.png';
import { Button } from '@/components/elements';
import { Head } from '@/components/head';
import { useColorModeValue } from '@/hooks';
import { useColorModeStore } from '@/stores/colorMode';

import spreadsheetImg from '../../assets/images/spreadsheet.png';
import * as S from './Layout.styles';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  const location = useLocation();

  const isInSignInPage = location.pathname === '/auth/sign-in';
  const isInSignUpPage = location.pathname === '/auth/sign-up';

  const { toggleColorMode } = useColorModeStore();

  const colorModeButtonConfig = {
    title: useColorModeValue('Habilitar modo escuro', 'Habilitar modo claro'),
    icon: useColorModeValue(<FiMoon />, <FiSun />)
  };

  return (
    <>
      <Head title={title} />

      <S.Container>
        <header>
          <Link to="/">
            <img src={logoImg} alt="eWallet Logo" />
            <h1>eWallet</h1>
          </Link>

          <Button colorScheme="white" size="sm" isRounded title={colorModeButtonConfig.title} onClick={toggleColorMode}>
            {colorModeButtonConfig.icon}
          </Button>
        </header>

        <main>
          <S.ImageSection>
            <h2>Organize suas finanças de forma eficiente</h2>
            <img src={spreadsheetImg} alt="Planilha de finanças" />
            <p>
              A diferença entre um homem de sucesso e outro orientado para o fracasso é que um está aprendendo a errar,
              enquanto o outro está procurando aprender com seus próprios erros.
            </p>
          </S.ImageSection>

          <S.FormSection>
            <S.Tabs>
              <S.Tab to="/auth/sign-in" $isActive={isInSignInPage}>
                Entrar
              </S.Tab>

              <S.Tab to="/auth/sign-up" $isActive={isInSignUpPage}>
                Cadastrar
              </S.Tab>
            </S.Tabs>

            {children}
          </S.FormSection>
        </main>
      </S.Container>
    </>
  );
}
