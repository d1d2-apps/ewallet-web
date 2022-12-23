import { Navigate, Route, Routes } from 'react-router-dom';

import { CreditCardsPage } from './CreditCards/CreditCardsPage';

export function CreditCardsRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<CreditCardsPage />} />
        <Route path="*" element={<Navigate to="./" />} />
      </Route>
    </Routes>
  );
}
