import { useRoutes } from 'react-router-dom';

import { LandingPage, NotFoundPage } from '@/features/misc';

import { useAuth } from '@/stores/auth';

import { Spinner } from '@/components/elements';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

function LoadingFeedback() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="2xl" />
    </div>
  );
}

export function AppRoutes() {
  const { user, isLoadingUser } = useAuth();

  const commonRoutes = [
    { path: '/', element: <LandingPage /> },
    { path: '*', element: <NotFoundPage /> }
  ];

  const routes = user ? protectedRoutes : publicRoutes;

  const routesElement = useRoutes([...routes, ...commonRoutes]);

  if (isLoadingUser) {
    return <LoadingFeedback />;
  }

  return routesElement;
}
