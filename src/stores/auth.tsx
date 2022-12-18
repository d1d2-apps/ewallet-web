import { createContext, useCallback, useState, useContext, useMemo, useEffect } from 'react';

import {
  AuthUser,
  getUser,
  SignInCredentialsDTO,
  signInWithEmailAndPassword,
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
  UserResponse
} from '@/features/auth';

import { storage } from '@/utils/storage';

import { LoadingFeedback } from '@/components/feedbacks';

interface AuthContextData {
  user: AuthUser | null;
  isLoadingUser: boolean;
  signIn(data: SignInCredentialsDTO): Promise<void>;
  signUp(data: SignUpCredentialsDTO): Promise<void>;
  signOut(): void;
  refetchUser(): Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const handleUserResponse = async (data: UserResponse) => {
  const { token, user } = data;
  storage.setToken(token);
  return user;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const refetchUser = useCallback(async () => {
    try {
      const token = storage.getToken();

      if (token) {
        const data = await getUser();
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signIn = useCallback(async (data: SignInCredentialsDTO) => {
    const response = await signInWithEmailAndPassword(data);
    const authUser = await handleUserResponse(response);
    setUser(authUser);
  }, []);

  const signUp = useCallback(async (data: SignUpCredentialsDTO) => {
    const response = await signUpWithEmailAndPassword(data);
    const authUser = await handleUserResponse(response);
    setUser(authUser);
  }, []);

  const signOut = useCallback(async () => {
    storage.clearToken();
    window.location.assign(window.location.origin as unknown as string);
    setUser(null);
  }, []);

  const providerValue = useMemo(
    () => ({ user, isLoadingUser, signIn, signUp, signOut, refetchUser }),
    [user, isLoadingUser, signIn, signUp, signOut, refetchUser]
  );

  useEffect(() => {
    setIsLoadingUser(true);

    refetchUser().then(() => setIsLoadingUser(false));
  }, [refetchUser]);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be inside AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
