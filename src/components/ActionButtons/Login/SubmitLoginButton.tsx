import api from '@/lib/api';
import store from '@/stores';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import { ButtonHTMLAttributes } from 'react';
import { authType, componentPropsType } from '@/types';

const SubmitLoginButton = ({
  children,
  email,
  password,
  autoLogin,
  ...props
}: componentPropsType.ComponentBaseProps<authType.LoginPayload> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { user, accessToken } = await api.auth.login({ email, password, autoLogin });
      store.auth.useAuthStore.getState().setAccessToken(accessToken);
      store.auth.useAuthStore.getState().setUser(user);

      // 기존에 있던 페이지로 이동

      const router = useRouter();

      // 로그인 처리 성공 시

      if (!user.profileUrl) {
        router.push('/signup/flow?step=profile');
      } else if (!user.agreedTerms) {
        router.push('/signup/flow?step=terms');
      } else {
        const searchParams = useSearchParams();
        const redirect = searchParams.get('redirect');
        router.push(redirect || '/');
      }
    } catch (err: any) {
      alert(err.message || '로그인 실패!');
    }
  };

  return (
    <Button size="medium" wide colorFill="mint" onClick={handleLogin} {...props}>
      {children}
    </Button>
  );
};

export default SubmitLoginButton;
