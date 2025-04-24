'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputBar from '@/components/InputBar';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import GoogleButton from '@/components/ActionButtons/Login/GoogleButton';
import KakaoButton from '@/components/ActionButtons/Login/KakaoButton';
import NaverButton from '@/components/ActionButtons/Login/NaverButton';
import InputToggle from '@/components/InputToggle';
import SubmitLoginButton from '@/components/ActionButtons/Login/SubmitLoginButton';
import Image from 'next/image';
import Link from 'next/link';
import { vars } from '@/styles/theme.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  return (
    <section className="container center-container">
      <Image
        src={'/images/logo_bubble.svg'}
        width={110}
        height={110}
        alt="heyB"
        style={{ display: 'flex', margin: '20px auto' }}
      />
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
      <InputToggle className="mt-20">
        <InputToggle.Input type="checkbox">자동로그인</InputToggle.Input>
      </InputToggle>
      <div className={'flex-center gap-10 mt-20'}>
        <Button size="medium" wide onClick={() => router.push('/signup')}>
          회원가입
        </Button>
        <SubmitLoginButton email={email} password={password} autoLogin={autoLogin}>
          로그인
        </SubmitLoginButton>
      </div>
      <div
        className="gap-10 pt-20 pb-20 flex-center gap-10"
        style={{
          borderBottom: `1px solid ${vars.colors.lightCharcoal}`,
          color: vars.colors.charcoal,
        }}
      >
        <Link href={'/'}>아이디 찾기</Link>|<Link href={'/'}>비밀번호 찾기</Link>
      </div>
      <div className="mt-20">
        <GoogleButton />
        <KakaoButton />
        <NaverButton />
      </div>
    </section>
  );
};

export default LoginPage;
