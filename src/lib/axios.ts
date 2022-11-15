import Axios, { AxiosRequestConfig } from 'axios';

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

export const axios = Axios.create({
  baseURL: API_URL
});

axios.interceptors.request.use(authRequestInterceptor);
