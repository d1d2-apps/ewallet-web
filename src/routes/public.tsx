import { Navigate, RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes: RouteObject[] = [
  { path: 'auth/*', element: <AuthRoutes /> },
  { path: '*', element: <Navigate to="/" /> }
];
