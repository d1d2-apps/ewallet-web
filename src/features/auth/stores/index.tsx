import { createContext, useCallback, useState, useContext, useMemo } from 'react';

import { AuthUser, SignInCredentialsDTO, SignUpCredentialsDTO } from '@/features/auth';
import { useSignIn, useSignOut, useSignUp, useUser } from '@/lib/react-query-auth';

interface AuthContextData {
  user: AuthUser | null;
  isLoadingUser: boolean;
  signIn(data: SignInCredentialsDTO): Promise<void>;
  signUp(data: SignUpCredentialsDTO): Promise<void>;
  signOut(): Promise<void>;
  refetchUser(): Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signInMutation = useSignIn();
  const signUpMutation = useSignUp();
  const signOutMutation = useSignOut();

  const userMutation = useUser({
    onSuccess: data => {
      if (data) {
        setUser(data);
      }
    },
    onError: async err => {
      console.log(err);
      await signOutMutation.mutateAsync({});
      setUser(null);
    }
  });

  const signIn = useCallback(
    async (data: SignInCredentialsDTO) => {
      const response = await signInMutation.mutateAsync(data);
      setUser(response);
    },
    [signInMutation]
  );

  const signUp = useCallback(
    async (data: SignUpCredentialsDTO) => {
      const response = await signUpMutation.mutateAsync(data);
      setUser(response);
    },
    [signUpMutation]
  );

  const signOut = useCallback(async () => {
    await signOutMutation.mutateAsync({});
    setUser(null);
  }, [signOutMutation]);

  const refetchUser = useCallback(async () => {
    await userMutation.refetch();
  }, [userMutation]);

  const providerValue = useMemo(
    () => ({ user, isLoadingUser: userMutation.isLoading, signIn, signUp, signOut, refetchUser }),
    [user, userMutation.isLoading, signIn, signUp, signOut, refetchUser]
  );

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
