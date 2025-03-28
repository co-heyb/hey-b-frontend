'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

const GoogleButton = () => {
  const handleClick = () => {
    window.location.href = '/api/auth/google'; // OAuth 엔드포인트로 이동
  };

  return (
    <Button size="medium" wide colorFill="google" onClick={handleClick}>
      <Icon src="/icons/google.svg" colorFill="origin" alt="Google" size="small" />
      Google 계정으로 로그인
    </Button>
  );
};

export default GoogleButton;
