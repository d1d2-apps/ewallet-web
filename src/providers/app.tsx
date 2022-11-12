import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from 'styled-components';

import { theme } from '@/config/styles/theme';
import { GlobalStyle } from '@/config/styles/GlobalStyles';
import { Button, Spinner } from '@/components/elements';

interface AppProviderProps {
  children: React.ReactNode;
}

const LoadingFeedback = (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Spinner size="2xl" />
  </div>
);

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const appTheme = useTheme();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        color: appTheme.colors.red[500],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem'
      }}
      role="alert"
    >
      <h2
        style={{
          fontSize: appTheme.fontSizes['2xl'],
          fontWeight: 600,
          margin: 0,
          fontFamily: appTheme.fontFamilies.montserrat
        }}
      >
        Ooops, something went wrong :(
      </h2>

      <pre style={{ fontSize: appTheme.fontSizes.lg, margin: 0 }}>{error.message}</pre>

      <Button style={{ width: 'fit-content' }} onClick={resetErrorBoundary}>
        Refresh
      </Button>
    </div>
  );
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={LoadingFeedback}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>{children}</Router>

          <GlobalStyle theme={theme} />
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  );
}
