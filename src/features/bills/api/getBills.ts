import { useQuery } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { Bill } from '../types';

export interface GetBillsDTO {
  data: {
    creditCard?: string | 'all';
    month: number;
    year: number;
  };
}

const getBills = async ({ data }: GetBillsDTO) => {
  const response = await axios.get<Bill[]>('/bills', { params: data });
  return response.data;
};

type QueryFnType = typeof getBills;

type UseBillOptions = {
  params: GetBillsDTO['data'];
  options?: QueryConfig<QueryFnType>;
};

const defaultParams: UseBillOptions['params'] = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear()
};

export const useBills = ({ params, options }: UseBillOptions = { params: defaultParams }) => {
  return useQuery<AsyncReturnType<QueryFnType>>({
    ...options,
    queryKey: ['bills', params.creditCard || 'all', params.year, params.month],
    queryFn: () => getBills({ data: params })
  });
};
