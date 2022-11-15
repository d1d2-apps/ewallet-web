import { useRoutes } from 'react-router-dom';

import { LandingPage, NotFoundPage } from '@/features/misc';

import { useAuth } from '@/stores/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export function AppRoutes() {
  const { user } = useAuth();

  const commonRoutes = [
    { path: '/', element: <LandingPage /> },
    { path: '*', element: <NotFoundPage /> }
  ];

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
}
