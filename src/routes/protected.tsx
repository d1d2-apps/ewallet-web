import { Suspense } from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

import { Spinner } from '@/components/elements';
import { MainLayout } from '@/components/layouts';

const { ProfilePage } = lazyImport(() => import('@/features/users'), 'ProfilePage');
const { DebtorsRoutes } = lazyImport(() => import('@/features/debtors'), 'DebtorsRoutes');
const { CreditCardsRoutes } = lazyImport(() => import('@/features/creditCards'), 'CreditCardsRoutes');

function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div
            style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Spinner size="2xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export const protectedRoutes: RouteObject[] = [
  {
    path: 'app',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="profile" /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'debtors/*', element: <DebtorsRoutes /> },
      { path: 'cards/*', element: <CreditCardsRoutes /> },
      { path: '*', element: <Navigate to="profile" /> }
    ]
  }
];
