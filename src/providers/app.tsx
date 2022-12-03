import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import NiceModal from '@ebay/nice-modal-react';

import { theme } from '@/config/styles/theme';
import { GlobalStyle } from '@/config/styles/GlobalStyles';

import { queryClient } from '@/lib/react-query';
import { ToastProvider } from '@/lib/react-toastify';

import { AuthProvider } from '@/stores/auth';

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
          fontFamily: appTheme['font-family'].montserrat,
          fontSize: appTheme['font-size']['2xl'],
          fontWeight: 600,
          color: appTheme.colors.red[500],
          margin: 0
        }}
      >
        Ooops, alguma coisa deu errado :(
      </h2>

      <pre style={{ fontSize: appTheme['font-size'].lg, margin: 0 }}>{error.message}</pre>

      <Button style={{ width: 'fit-content' }} onClick={resetErrorBoundary}>
        Recarregar
      </Button>
    </div>
  );
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={LoadingFeedback}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <NiceModal.Provider>
                <AuthProvider>
                  <Router>{children}</Router>
                </AuthProvider>

                <ToastProvider />
              </NiceModal.Provider>
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>

      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}
