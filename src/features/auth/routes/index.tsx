import { Navigate, Route, Routes } from 'react-router-dom';

import { SignInPage } from './SignIn/SignInPage';
import { SignUpPage } from './SignUp/SignUpPage';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="./sign-in" />} />
    </Routes>
  );
}
