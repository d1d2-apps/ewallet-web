import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';

import { ControlledTextInput } from '@/components/forms';
import { Button } from '@/components/elements';

import { Layout } from '../../components/Layout/Layout';

import * as S from './SignInPage.styles';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignInPage() {
  const signInForm = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSignIn = (formData: SignInFormData) => {
    console.log(formData);
  };

  return (
    <Layout title="Entrar">
      <S.Title>Entre na sua conta</S.Title>

      <S.Form onSubmit={signInForm.handleSubmit(handleSignIn)}>
        <ControlledTextInput
          name="email"
          control={signInForm.control}
          type="email"
          label="Seu e-mail"
          icon={FiMail}
          placeholder="fulano@email.com.br"
        />

        <ControlledTextInput
          name="password"
          control={signInForm.control}
          type="password"
          label="Sua senha"
          icon={FiLock}
          placeholder="********"
        />

        <Button type="submit">Entrar</Button>
      </S.Form>

      <S.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Esqueceu sua senha?</a>
      </S.Footer>
    </Layout>
  );
}
