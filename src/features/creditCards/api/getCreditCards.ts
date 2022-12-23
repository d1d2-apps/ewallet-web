import { useQuery } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { CreditCard } from '../types';

export const getCreditCards = async () => {
  const response = await axios.get<CreditCard[]>('/users/credit-cards');
  return response.data;
};

type QueryFnType = typeof getCreditCards;

type UseCreditCardOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCreditCards = ({ config }: UseCreditCardOptions = {}) => {
  return useQuery<AsyncReturnType<QueryFnType>>({
    ...config,
    queryKey: ['creditCards'],
    queryFn: getCreditCards
  });
};
