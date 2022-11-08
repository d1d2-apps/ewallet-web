import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/atoms/Button';
import { TextInput } from '../../components/atoms/TextInput';

import * as S from './styles';

export function LoginPage() {
  return (
    <S.SignInPageContainer>
      <S.SignInForm>
        <header>
          <h1>eWallet</h1>
          <h2>Organize suas finanças de forma eficiente</h2>
        </header>

        <h3>Entre na sua conta</h3>

        <main>
          <label htmlFor="email">
            <span>Seu e-mail</span>

            <TextInput.Root>
              <TextInput.Icon>
                <FiMail />
              </TextInput.Icon>

              <TextInput.Input id="email" type="email" placeholder="fulano@email.com.br" />
            </TextInput.Root>
          </label>

          <label htmlFor="password">
            <span>Sua senha</span>

            <TextInput.Root>
              <TextInput.Icon>
                <FiLock />
              </TextInput.Icon>

              <TextInput.Input id="password" type="password" placeholder="********" />
            </TextInput.Root>
          </label>

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
