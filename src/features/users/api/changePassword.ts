import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';

export type ChangePasswordDTO = {
  data: {
    oldPassword: string;
    password: string;
    passwordConfirmation: string;
  };
};

export const changePassword = ({ data }: ChangePasswordDTO) => {
  return axios.patch('/users/account/password', data);
};

type UseChangePasswordOptions = {
  config?: MutationConfig<typeof changePassword>;
};

export function useChangePassword({ config }: UseChangePasswordOptions = {}) {
  return useMutation({
    ...config,
    mutationFn: changePassword
  });
}
