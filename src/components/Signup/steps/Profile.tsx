'use client';
import { useEffect, useState } from 'react';
import InputBar from '@/components/InputBar';
import { useSignupStep } from '@/hooks/useSignupStep';
import Button from '@/components/Button';
import ProfileSelector from '@/components/\bProfileSelector';
import InterestSelector from '@/components/InterestSelector';
import { profiles } from '@/lib/constants/profiles';

const StepProfile = () => {
  const [nickname, setNickname] = useState('');
  const { back, next } = useSignupStep();
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  useEffect(() => {
    // 랜덤 프로필 설정
    const randomProfileId = profiles[Math.floor(Math.random() * profiles.length)].id;
    setSelectedProfile(randomProfileId);
  }, []);
  return (
    <>
      <div className="text-center">
        <h2>프로필 설정</h2>
        <p> 프로필 이미지와 닉네임, 관심사를 선택해주세요.</p>
      </div>
      <div className="mb-20">
        <InputBar>
          <InputBar.Label>닉네임</InputBar.Label>
          <InputBar.Input value={nickname} onChange={(e) => setNickname(e.target.value)} required />
          <InputBar.Helper>공백 없이 2~12자까지 입력 가능합니다.</InputBar.Helper>
        </InputBar>
      </div>
      <div className="mb-20">
        <ProfileSelector value={selectedProfile} onChange={setSelectedProfile} />
      </div>
      <div className="mt-20">
        <h3>관심사를 선택해주세요.(선택)</h3>

        <InterestSelector value={selectedInterest} onChange={setSelectedInterest} />
      </div>
      <div className="flex-center gap-10 mt-20">
        <Button size="medium" wide onClick={back}>
          이전
        </Button>
        <Button size="medium" wide colorFill="mint" onClick={next}>
          다음
        </Button>
      </div>
    </>
  );
};

export default StepProfile;
