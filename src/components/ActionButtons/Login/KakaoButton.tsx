// ✅ KakaoButton.tsx (components/ActionButtons/Login/KakaoButton.tsx)
'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

const KakaoButton = () => {
  const handleClick = () => {
    window.location.href = '/api/auth/kakao'; // OAuth 엔드포인트로 이동
  };

  return (
    <Button size="medium" wide colorFill="kakao" onClick={handleClick}>
      <Icon src="/icons/kakao.svg" colorFill="origin" alt="Kakao" size="small" />
      카카오 계정으로 로그인
    </Button>
  );
};

export default KakaoButton;
