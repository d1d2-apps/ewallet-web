import { useNavigate } from 'react-router-dom';

import { Heading } from '@/components/elements';

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
      <S.Header>
        <Heading variant="h3" asChild>
          <h3>Crie sua conta</h3>
        </Heading>
      </S.Header>

      <SignUpForm onSuccess={onSignUpSuccess} />
    </Layout>
  );
}
