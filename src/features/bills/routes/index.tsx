import { Navigate, Route, Routes } from 'react-router-dom';

import { BillsPage } from './Bills/BillsPage';

export function BillsRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<BillsPage />} />
        <Route path="*" element={<Navigate to="./" />} />
      </Route>
    </Routes>
  );
}
