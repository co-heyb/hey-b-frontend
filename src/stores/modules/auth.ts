import { create } from 'zustand';
import type { AuthState, User } from '@/types/modules/auth';

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user: User) => set({ user }),
  logout: () => set({ accessToken: null, user: null }),
}));
