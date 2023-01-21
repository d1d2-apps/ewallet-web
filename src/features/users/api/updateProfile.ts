import { useMutation } from '@tanstack/react-query';

import { AuthUser, useAuth } from '@/features/auth';
import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';

export type UpdateProfileDTO = {
  data: {
    name: string;
    email: string;
  };
};

export const updateProfile = async ({ data }: UpdateProfileDTO) => {
  const response = await axios.put<AuthUser>('/users/profile', data);
  return response.data;
};

type UseUpdateProfileOptions = {
  config?: MutationConfig<typeof updateProfile>;
};

export function useUpdateProfile({ config }: UseUpdateProfileOptions = {}) {
  const { refetchUser } = useAuth();

  return useMutation({
    onSuccess: () => {
      refetchUser();
    },
    ...config,
    mutationFn: updateProfile
  });
}
