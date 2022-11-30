import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';

import { AuthUser } from '@/features/auth';

import { useAuth } from '@/stores/auth';

export type UpdateUserDTO = {
  data: {
    name: string;
    email: string;
  };
};

export const updateProfile = async ({ data }: UpdateUserDTO) => {
  const response = await axios.put<AuthUser>('/users/profile', data);
  return response.data;
};

type UseUpdateProfileOptions = {
  config?: MutationConfig<typeof updateProfile>;
};

export const useUpdateProfile = ({ config }: UseUpdateProfileOptions = {}) => {
  const { refetchUser } = useAuth();

  return useMutation({
    onSuccess: () => {
      refetchUser();
    },
    ...config,
    mutationFn: updateProfile
  });
};
