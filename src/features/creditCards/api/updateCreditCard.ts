import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { CreditCard } from '../types';

export type UpdateCreditCardDTO = {
  data: {
    name: string;
  };
  creditCardId: string;
};

export const updateCreditCard = async ({ data, creditCardId }: UpdateCreditCardDTO) => {
  const response = await axios.put<CreditCard>(`/users/credit-cards/${creditCardId}`, data);
  return response.data;
};

type UseUpdateCreditCardOptions = {
  config?: MutationConfig<typeof updateCreditCard>;
};

export const useUpdateCreditCard = ({ config }: UseUpdateCreditCardOptions = {}) => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['creditCards']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousCreditCard) {
        queryClient.setQueryData(['creditCard', context.previousCreditCard.id], context.previousCreditCard);
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries(['creditCards']);
    },
    ...config,
    mutationFn: updateCreditCard
  });
};
