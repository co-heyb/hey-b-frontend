// lib/fetcher.ts

import store from '@/stores';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetcherOptions {
  headers?: Record<string, string>;
  body?: any;
}

export class APIError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

const request = async <T>(method: Method, url: string, options: FetcherOptions = {}): Promise<T> => {
  const token = store.auth.useAuthStore.getState().accessToken;

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new APIError(error.message || 'API 요청 실패', res.status);
  }

  return res.json();
};
export const fetcher = {
  get: <T>(url: string, options?: FetcherOptions) => request<T>('GET', url, options),
  post: <T>(url: string, body?: any, options?: FetcherOptions) => request<T>('POST', url, { ...options, body }),
  put: <T>(url: string, body?: any, options?: FetcherOptions) => request<T>('PUT', url, { ...options, body }),
  delete: <T>(url: string, options?: FetcherOptions) => request<T>('DELETE', url, options),
};
