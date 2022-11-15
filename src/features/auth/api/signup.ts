import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type SignUpCredentialsDTO = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const signUpWithEmailAndPassword = async (data: SignUpCredentialsDTO): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>('/auth/sign-up', data);
  return response.data;
};
