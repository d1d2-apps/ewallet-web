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
            <input id="email" type="text" placeholder="fulano@email.com.br" />
          </label>

          <label htmlFor="password">
            <span>Sua senha</span>
            <input id="password" type="password" placeholder="********" />
          </label>

          <button type="submit">Entrar</button>
        </main>

        <footer>
          <span>Não tem uma conta?</span>
          <a href="#">Cadastrar</a>
        </footer>
      </S.SignInForm>
    </S.SignInPageContainer>
  );
}
