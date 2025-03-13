import Button from '@/components/Button';
import router from 'next/router';

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: any) => {
    // const user = useUser(); // 로그인 여부 체크
    const user = true;
    if (!user) {
      return (
        <div className="messageContainer">
          <p>로그인이 필요한 페이지입니다.</p>
          <Button onClick={() => router.push('/login')}>로그인하기</Button>
        </div>
      );
    }
    return <Component {...props} />;
  };
};

export default withAuth;
