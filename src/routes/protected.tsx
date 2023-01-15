import { Suspense } from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { LoadingFeedback } from '@/components/feedbacks';
import { MainLayout } from '@/components/layouts';
import { lazyImport } from '@/utils/lazyImport';

const { ProfilePage } = lazyImport(() => import('@/features/users'), 'ProfilePage');
const { DebtorsRoutes } = lazyImport(() => import('@/features/debtors'), 'DebtorsRoutes');
const { CreditCardsRoutes } = lazyImport(() => import('@/features/creditCards'), 'CreditCardsRoutes');
const { BillsRoutes } = lazyImport(() => import('@/features/bills'), 'BillsRoutes');

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingFeedback title="Carregando recursos..." />}>
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
      { path: 'bills/*', element: <BillsRoutes /> },
      { path: '*', element: <Navigate to="profile" /> }
    ]
  }
];
