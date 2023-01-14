import { useRoutes } from 'react-router-dom';

import { LoadingFeedback } from '@/components/feedbacks';
import { LandingPage, NotFoundPage } from '@/features/misc';
import { AuthLoader } from '@/lib/react-query-auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export function AppRoutes() {
  const commonRoutes = [
    { path: '/', element: <LandingPage /> },
    { path: '*', element: <NotFoundPage /> }
  ];

  const publicRoutesElement = <>{useRoutes([...publicRoutes, ...commonRoutes])}</>;

  const protectedRoutesElement = <>{useRoutes([...protectedRoutes, ...commonRoutes])}</>;

  return (
    <AuthLoader
      renderLoading={() => <LoadingFeedback title="Verificando dados da sessão..." />}
      renderUnauthenticated={() => publicRoutesElement}
    >
      {protectedRoutesElement}
    </AuthLoader>
  );
}
