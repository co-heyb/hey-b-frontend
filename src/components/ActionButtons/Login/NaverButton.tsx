// ✅ naverButton.tsx (components/ActionButtons/Login/naverButton.tsx)
'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

const NaverButton = () => {
  const handleClick = () => {
    window.location.href = '/api/auth/naver'; // OAuth 엔드포인트로 이동
  };

  return (
    <Button size="medium" wide colorFill="naver" onClick={handleClick}>
      <Icon src="/icons/naver.svg" colorFill="origin" alt="naver" size="small" />
      네이버 계정으로 로그인
    </Button>
  );
};

export default NaverButton;
