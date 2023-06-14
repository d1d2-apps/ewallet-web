import { Navigate, Route, Routes } from 'react-router-dom';

import { BillsPage } from './Bills/BillsPage';
import { CreateBillPage } from './CreateBill/CreateBillPage';

export function BillsRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<BillsPage />} />
        <Route path="create" element={<CreateBillPage />} />
        <Route path="*" element={<Navigate to="./" />} />
      </Route>
    </Routes>
  );
}
