import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type SignInCredentialsDTO = {
  email: string;
  password: string;
};

export const signInWithEmailAndPassword = async (data: SignInCredentialsDTO): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>('/auth/sign-in', data);
  return response.data;
};
