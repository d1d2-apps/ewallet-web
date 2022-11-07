import { ThemeProvider } from 'styled-components';

import { LoginPage } from './pages/SignInPage';

import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />

      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}
