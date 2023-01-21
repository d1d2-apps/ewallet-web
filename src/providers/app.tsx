import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import NiceModal from '@ebay/nice-modal-react';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, useTheme } from 'styled-components';

import { Button } from '@/components/elements';
import { LoadingFeedback } from '@/components/feedbacks';
import { GlobalStyle } from '@/config/styles/GlobalStyles';
import { themes } from '@/config/styles/themes';
import { AuthProvider } from '@/features/auth';
import { queryClient } from '@/lib/react-query';
import { ToastProvider } from '@/lib/react-toastify';
import { ColorModeProvider, useColorMode } from '@/stores/colorMode';

interface AppProviderProps {
  children: React.ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const theme = useTheme();

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
          fontFamily: theme.fontFamily.montserrat,
          fontSize: theme.fontSize['2xl'],
          fontWeight: 600,
          color: theme.colors.error,
          margin: 0
        }}
      >
        Ooops, alguma coisa deu errado :(
      </h2>

      <pre style={{ fontSize: theme.fontSize.lg, margin: 0 }}>{error.message}</pre>

      <Button style={{ width: 'fit-content' }} onClick={resetErrorBoundary}>
        Recarregar
      </Button>
    </div>
  );
}

function App({ children }: AppProviderProps) {
  const { colorMode } = useColorMode();

  const currentTheme = themes[colorMode];

  return (
    <ThemeProvider theme={currentTheme}>
      <Suspense fallback={<LoadingFeedback title="Carregando informações..." />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <NiceModal.Provider>
                <TooltipProvider>
                  <AuthProvider>
                    <Router>{children}</Router>
                  </AuthProvider>
                </TooltipProvider>

                <ToastProvider />
              </NiceModal.Provider>
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>

      <GlobalStyle theme={currentTheme} />
    </ThemeProvider>
  );
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ColorModeProvider>
      <App>{children}</App>
    </ColorModeProvider>
  );
}
