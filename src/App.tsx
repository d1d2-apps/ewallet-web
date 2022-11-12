import { AppRoutes } from '@/routes';

import { AppProvider } from '@/providers/app';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
