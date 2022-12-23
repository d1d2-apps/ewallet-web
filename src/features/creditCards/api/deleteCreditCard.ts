import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { CreditCard } from '../types';

export const deleteCreditCard = ({ creditCardId }: { creditCardId: string }) => {
  return axios.delete(`/users/credit-cards/${creditCardId}`);
};

type UseDeleteCreditCardOptions = {
  config?: MutationConfig<typeof deleteCreditCard>;
};

export const useDeleteCreditCard = ({ config }: UseDeleteCreditCardOptions = {}) => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['creditCards']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousCreditCards) {
        queryClient.setQueryData(['creditCards'], context.previousCreditCards);
      }
    },
    onSuccess: (_, { creditCardId }) => {
      queryClient.invalidateQueries(['creditCards']);

      const previousCreditCards = queryClient.getQueryData<CreditCard[]>(['creditCards']);

      queryClient.setQueryData(
        ['creditCards'],
        previousCreditCards?.filter(creditCard => creditCard.id !== creditCardId)
      );
    },
    ...config,
    mutationFn: deleteCreditCard
  });
};
