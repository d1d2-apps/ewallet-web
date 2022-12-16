import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Debtor } from '../types';

export type UpdateDebtorDTO = {
  data: {
    name: string;
    color: string;
  };
  debtorId: string;
};

export const updateDebtor = async ({ data, debtorId }: UpdateDebtorDTO) => {
  const response = await axios.put<Debtor>(`/users/debtors/${debtorId}`, data);
  return response.data;
};

type UseUpdateDebtorOptions = {
  config?: MutationConfig<typeof updateDebtor>;
};

export const useUpdateDebtor = ({ config }: UseUpdateDebtorOptions = {}) => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['debtors']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousDebtor) {
        queryClient.setQueryData(['debtor', context.previousDebtor.id], context.previousDebtor);
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries(['debtors']);
    },
    ...config,
    mutationFn: updateDebtor
  });
};
