import { Layout } from '../../components/Layout/Layout';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

import * as S from './SignUpPage.styles';

export function SignUpPage() {
  return (
    <Layout title="Cadastre-se">
      <S.Title>Crie sua conta</S.Title>
      <SignUpForm />
    </Layout>
  );
}
