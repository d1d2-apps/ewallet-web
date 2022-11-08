import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/atoms/Button';
import { ControlledTextInput } from '../../components/molecules/ControlledTextInput';

import * as S from './styles';

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
    <S.SignInPageContainer>
      <S.SignInForm onSubmit={signInForm.handleSubmit(handleSignIn)}>
        <header>
          <h1>eWallet</h1>
          <h2>Organize suas finanças de forma eficiente</h2>
        </header>

        <h3>Entre na sua conta</h3>

        <main>
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
        </main>

        <footer>
          <span>Não tem uma conta?</span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Cadastrar</a>
        </footer>
      </S.SignInForm>
    </S.SignInPageContainer>
  );
}
