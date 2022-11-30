import { AxiosError } from 'axios';
import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false
  }
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

type Fn = (...args: any) => any;

export type ExtractFnReturnType<FnType extends Fn> = ReturnType<FnType>;

export type QueryConfig<QueryFnType extends Fn> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends Fn> = UseMutationOptions<
  ExtractFnReturnType<AsyncReturnType<MutationFnType>>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
