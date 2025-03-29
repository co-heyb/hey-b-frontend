import Button from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const GoToLoginButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goLogin = () => {
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };
  return <Button onClick={() => goLogin()}>로그인</Button>;
};
export default GoToLoginButton;
