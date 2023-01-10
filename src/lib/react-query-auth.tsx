import { configureAuth, ReactQueryAuthConfig } from 'react-query-auth';

import {
  signInWithEmailAndPassword,
  getUser,
  signUpWithEmailAndPassword,
  UserResponse,
  SignInCredentialsDTO,
  SignUpCredentialsDTO,
  AuthUser
} from '@/features/auth';
import { storage } from '@/utils/storage';

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function userFn() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: SignInCredentialsDTO) {
  const response = await signInWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: SignUpCredentialsDTO) {
  const response = await signUpWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig: ReactQueryAuthConfig<AuthUser | null, SignInCredentialsDTO, SignUpCredentialsDTO> = {
  userFn,
  loginFn,
  registerFn,
  logoutFn
};

export const {
  useUser,
  useLogin: useSignIn,
  useRegister: useSignUp,
  useLogout: useSignOut,
  AuthLoader
} = configureAuth(authConfig);
