import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';

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
    ...config,
    mutationFn: createDebtor
  });
}
