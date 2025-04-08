'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useSignupStep } from '@/hooks/useSignupStep';

const StepComplete = () => {
  const router = useRouter();
  const { back, next } = useSignupStep();

  return (
    <>
      <div className="text-center">
        <h2>🎉 가입이 완료되었습니다!</h2>
        <p>이제 heyB에서 취미를 공유해보세요 :)</p>
      </div>
      <div className="flex-center gap-10 mt-20">
        <Button onClick={back} wide size="medium">
          이전 페이지로 돌아가기
        </Button>
        <Button onClick={() => router.push('/')} wide size="medium" colorFill="mint">
          메인으로 가기
        </Button>
      </div>
    </>
  );
};

export default StepComplete;
