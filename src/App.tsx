import { ThemeProvider } from 'styled-components';

import { SignInPage } from './pages/SignInPage';

import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignInPage />

      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}
