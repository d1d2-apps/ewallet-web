import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Debtor } from '../types';

export type CreateDebtorDTO = {
  data: {
    name: string;
    color: string;
  };
};

export const createDebtor = async ({ data }: CreateDebtorDTO) => {
  const response = await axios.post<Debtor>('/users/debtors', data);
  return response.data;
};

type UseCreateDebtorsOptions = {
  config?: MutationConfig<typeof createDebtor>;
};

export function useCreateDebtor({ config }: UseCreateDebtorsOptions = {}) {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['debtors']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousDiscussions) {
        queryClient.setQueryData(['debtors'], context.previousDiscussions);
      }
    },
    onSuccess: createdDebtor => {
      queryClient.invalidateQueries(['debtors']);

      const previousDebtors = queryClient.getQueryData<Debtor[]>(['debtors']);

      queryClient.setQueryData(['debtors'], [...(previousDebtors || []), createdDebtor]);
    },
    ...config,
    mutationFn: createDebtor
  });
}
