import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { CreditCard } from '../types';

export type CreateCreditCardDTO = {
  data: {
    name: string;
  };
};

export const createCreditCard = async ({ data }: CreateCreditCardDTO) => {
  const response = await axios.post<CreditCard>('/users/credit-cards', data);
  return response.data;
};

type UseCreateCreditCardsOptions = {
  config?: MutationConfig<typeof createCreditCard>;
};

export function useCreateCreditCard({ config }: UseCreateCreditCardsOptions = {}) {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries(['creditCards']);
    },
    onError: (_, __, context: any) => {
      if (context?.previousDiscussions) {
        queryClient.setQueryData(['creditCards'], context.previousDiscussions);
      }
    },
    onSuccess: createdCreditCard => {
      queryClient.invalidateQueries(['creditCards']);

      const previousCreditCards = queryClient.getQueryData<CreditCard[]>(['creditCards']);

      queryClient.setQueryData(['creditCards'], [...(previousCreditCards || []), createdCreditCard]);
    },
    ...config,
    mutationFn: createCreditCard
  });
}
