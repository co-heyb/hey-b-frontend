'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api/auth';
import InputBar from '@/components/InputBar';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import GoogleButton from '@/components/ActionButtons/Login/GoogleButton';
import KakaoButton from '@/components/ActionButtons/Login/KakaoButton';
import NaverButton from '@/components/ActionButtons/Login/NaverButton';
import InputToggle from '@/components/InputToggle';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await login({ email, password });

      if (!result.hasProfile) {
        router.push('/signup/flow?step=profile');
      } else if (!result.agreedTerms) {
        router.push('/signup/flow?step=terms');
      } else {
        router.push('/');
      }
    } catch (err: any) {
      alert(err.message || '로그인 실패! 다시 확인해주세요.');
    }
  };

  return (
    <section className="center-container">
      <h2>로그인</h2>
      <InputBar>
        <InputBar.Label>Email</InputBar.Label>
        <InputBar.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </InputBar>
      <InputBar>
        <InputBar.Label>Password</InputBar.Label>
        <InputBar.Input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        >
          <InputBar.Buttons>
            <Button size="extraSmall" radius="circle" variant="plain" onClick={() => setShowPassword((prev) => !prev)}>
              <Icon
                src={showPassword ? '/icons/eye-closed.svg' : '/icons/eye-open.svg'}
                size="small"
                alt="비밀번호 보기"
              />
            </Button>
          </InputBar.Buttons>
        </InputBar.Input>
      </InputBar>
      <Button style={{ marginTop: 16 }} size="medium" wide colorFill="mint" onClick={handleLogin}>
        로그인
      </Button>
      <InputToggle style={{ marginTop: 10 }}>
        <InputToggle.Input type="checkbox">자동로그인</InputToggle.Input>
      </InputToggle>

      <div style={{ marginTop: 24 }}>
        <GoogleButton />
        <KakaoButton />
        <NaverButton />
      </div>
    </section>
  );
};

export default LoginPage;
