'use client';

import { useState } from 'react';
import InputBar from '@/components/InputBar';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { useSignupStep } from '@/hooks/useSignupStep';

const StepCredentials = () => {
  const { back, next } = useSignupStep();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const isPasswordMatch = password === confirmPassword;

  return (
    <>
      <div className="text-center">
        <h2>계정 만들기</h2>
        <p className="mb-20">이메일과 비밀번호를 입력해주세요.</p>
      </div>
      <form>
        <InputBar>
          <InputBar.Label>이메일</InputBar.Label>
          <InputBar.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </InputBar>

        <InputBar>
          <InputBar.Label>비밀번호</InputBar.Label>
          <InputBar.Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          >
            <InputBar.Buttons>
              <Button size="extraSmall" radius="circle" variant="plain" onClick={togglePassword}>
                <Icon
                  src={showPassword ? '/icons/eye-closed.svg' : '/icons/eye-open.svg'}
                  size="small"
                  alt="비밀번호 보기"
                />
              </Button>
            </InputBar.Buttons>
          </InputBar.Input>
          <InputBar.Helper>영문, 숫자, 특수문자 포함 8자 이상</InputBar.Helper>
        </InputBar>

        <InputBar status={!isPasswordMatch && confirmPassword ? 'error' : undefined}>
          <InputBar.Label>비밀번호 확인</InputBar.Label>
          <InputBar.Input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          >
            <InputBar.Buttons>
              <Button size="extraSmall" radius="circle" variant="plain" onClick={toggleConfirmPassword}>
                <Icon
                  src={showConfirmPassword ? '/icons/eye-closed.svg' : '/icons/eye-open.svg'}
                  size="small"
                  alt="비밀번호 확인 보기"
                />
              </Button>
            </InputBar.Buttons>
          </InputBar.Input>
          {!isPasswordMatch && confirmPassword && <InputBar.Helper>비밀번호가 일치하지 않습니다.</InputBar.Helper>}
        </InputBar>

        <div className="flex-center gap-10 mt-20">
          <Button type="submit" size="medium" wide colorFill="mint" onClick={next}>
            다음
          </Button>
        </div>
      </form>
    </>
  );
};

export default StepCredentials;
