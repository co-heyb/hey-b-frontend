'use client';

import { useEffect } from 'react';
import store from '@/stores';
import api from '@/lib/api';

const AuthInitializer = () => {
  useEffect(() => {
    const restore = async () => {
      try {
        const { accessToken } = await api.auth.refresh();
        store.auth.useAuthStore.getState().setAccessToken(accessToken);

        const user = await api.auth.me();
        store.auth.useAuthStore.getState().setUser(user);
      } catch (err) {
        console.log('자동 로그인 실패', err);
      }
    };

    restore();
  }, []);

  return null;
};

export default AuthInitializer;
