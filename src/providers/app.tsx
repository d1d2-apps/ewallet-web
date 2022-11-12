import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/config/styles/theme';
import { GlobalStyle } from '@/config/styles/GlobalStyles';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>

      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}
