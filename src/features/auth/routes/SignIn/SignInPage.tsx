import { useNavigate } from 'react-router-dom';

import { Heading } from '@/components/elements';

import { Layout } from '../../components/Layout/Layout';
import { SignInForm } from '../../components/SignInForm/SignInForm';

import * as S from './SignInPage.styles';

export function SignInPage() {
  const navigate = useNavigate();

  const onSignInSuccess = () => {
    navigate('/app');
  };

  return (
    <Layout title="Entrar">
      <S.Header>
        <Heading variant="h3" asChild>
          <h3>Entre na sua conta</h3>
        </Heading>
      </S.Header>

      <SignInForm onSuccess={onSignInSuccess} />

      <S.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Esqueceu sua senha?</a>
      </S.Footer>
    </Layout>
  );
}
