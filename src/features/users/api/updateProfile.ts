import { useMutation } from '@tanstack/react-query';

import { AuthUser } from '@/features/auth';
import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { useUser } from '@/lib/react-query-auth';

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
  const { refetch: refetchUser } = useUser();

  return useMutation({
    onSuccess: () => {
      refetchUser();
    },
    ...config,
    mutationFn: updateProfile
  });
}
