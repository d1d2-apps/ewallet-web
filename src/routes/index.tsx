import { useRoutes } from 'react-router-dom';

import { LandingPage } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export function AppRoutes() {
  // const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <LandingPage /> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
}
