import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL } from '@/config';
import { storage } from '@/utils/storage';

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const newConfig = { ...config };

  if (newConfig.headers) {
    const token = storage.getToken();

    newConfig.headers.Authorization = token ? `Bearer ${token}` : '';
    newConfig.headers.Accept = 'application/json';
  }

  return newConfig;
};

const authSuccessResponseInterceptor = (response: AxiosResponse<any, any>) => response;

const authErrorResponseInterceptor = (error: AxiosError<any, any>) => {
  if (error.response?.status === 401) {
    storage.clearToken();
  }

  return Promise.reject(error);
};

export const axios = Axios.create({
  baseURL: API_URL
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(authSuccessResponseInterceptor, authErrorResponseInterceptor);
