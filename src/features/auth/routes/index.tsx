import { Navigate, Route, Routes } from 'react-router-dom';

import { SignInPage } from './SignIn/SignInPage';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="*" element={<Navigate to="./sign-in" />} />
    </Routes>
  );
}
