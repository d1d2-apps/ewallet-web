import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/config/styles/theme';
import { GlobalStyle } from '@/config/styles/GlobalStyles';
import { Spinner } from '@/components/ui';

interface AppProviderProps {
  children: React.ReactNode;
}

const LoadingFeedback = (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Spinner size="2xl" />
  </div>
);

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={LoadingFeedback}>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>

        <GlobalStyle theme={theme} />
      </ThemeProvider>
    </Suspense>
  );
}
