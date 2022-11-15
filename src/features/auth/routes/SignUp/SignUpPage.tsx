import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout/Layout';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

import * as S from './SignUpPage.styles';

export function SignUpPage() {
  const navigate = useNavigate();

  const onSignUpSuccess = () => {
    navigate('/app');
  };

  return (
    <Layout title="Cadastre-se">
      <S.Title>Crie sua conta</S.Title>
      <SignUpForm onSuccess={onSignUpSuccess} />
    </Layout>
  );
}
