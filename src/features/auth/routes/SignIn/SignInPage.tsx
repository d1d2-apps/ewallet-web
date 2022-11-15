import { useNavigate } from 'react-router-dom';

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
      <S.Title>Entre na sua conta</S.Title>

      <SignInForm onSuccess={onSignInSuccess} />

      <S.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Esqueceu sua senha?</a>
      </S.Footer>
    </Layout>
  );
}
