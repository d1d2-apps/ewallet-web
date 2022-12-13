import { useQuery } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { Debtor } from '../types';

export const getDebtors = async () => {
  const response = await axios.get<Debtor[]>('/users/debtors');
  return response.data;
};

type QueryFnType = typeof getDebtors;

type UseDebtorOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useDebtors = ({ config }: UseDebtorOptions = {}) => {
  return useQuery<AsyncReturnType<QueryFnType>>({
    ...config,
    queryKey: ['debtors'],
    queryFn: getDebtors
  });
};
