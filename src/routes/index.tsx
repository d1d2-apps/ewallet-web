import { useRoutes } from 'react-router-dom';

import { LandingPage, NotFoundPage } from '@/features/misc';

import { useAuth } from '@/stores/auth';

import { LoadingFeedback } from '@/components/feedbacks';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

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
