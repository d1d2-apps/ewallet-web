import { useQuery } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { Bill } from '../types';

const getBills = async () => {
  const response = await axios.get<Bill[]>('/bills');
  return response.data;
};

type QueryFnType = typeof getBills;

type UseBillOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useBills = ({ config }: UseBillOptions = {}) => {
  return useQuery<AsyncReturnType<QueryFnType>>({
    ...config,
    queryKey: ['bills'],
    queryFn: getBills
  });
};
