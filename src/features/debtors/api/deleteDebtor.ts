import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Debtor } from '../types';

export const deleteDebtor = ({ debtorId }: { debtorId: string }) => {
  return axios.delete(`/users/debtors/${debtorId}`);
};

type UseDeleteDebtorOptions = {
  config?: MutationConfig<typeof deleteDebtor>;
};

export const useDeleteDebtor = ({ config }: UseDeleteDebtorOptions = {}) => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['debtors']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousDebtors) {
        queryClient.setQueryData(['debtors'], context.previousDebtors);
      }
    },
    onSuccess: (_, { debtorId }) => {
      queryClient.invalidateQueries(['debtors']);

      const previousDebtors = queryClient.getQueryData<Debtor[]>(['debtors']);

      queryClient.setQueryData(
        ['debtors'],
        previousDebtors?.filter(debtor => debtor.id !== debtorId)
      );
    },
    ...config,
    mutationFn: deleteDebtor
  });
};
