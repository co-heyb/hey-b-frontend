// lib/api/modules/auth.ts

import type { LoginPayload, LoginResponse, User } from '@/types/modules/auth';
import { fetcher } from './fetcher';

export const login = (payload: LoginPayload) => {
  return fetcher.post<LoginResponse>('/api/auth/login', payload);
};

export const refresh = () => {
  return fetcher.get<{ accessToken: string }>('/api/auth/refresh');
};

export const logout = () => {
  return fetcher.post<void>('/api/auth/logout');
};

export const me = () => {
  return fetcher.get<User>('/api/auth/me');
};
