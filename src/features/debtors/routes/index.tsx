import { Navigate, Route, Routes } from 'react-router-dom';

import { DebtorsPage } from './Debtors/DebtorsPage';

export function DebtorsRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<DebtorsPage />} />
        <Route path="*" element={<Navigate to="./" />} />
      </Route>
    </Routes>
  );
}
