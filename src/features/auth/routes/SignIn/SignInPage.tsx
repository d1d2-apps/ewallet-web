import { Layout } from '../../components/Layout/Layout';
import { SignInForm } from '../../components/SignInForm/SignInForm';

import * as S from './SignInPage.styles';

export function SignInPage() {
  return (
    <Layout title="Entrar">
      <S.Title>Entre na sua conta</S.Title>

      <SignInForm />

      <S.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Esqueceu sua senha?</a>
      </S.Footer>
    </Layout>
  );
}
