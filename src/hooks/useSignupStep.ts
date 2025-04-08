import store from '@/stores';
import { useRouter, useSearchParams } from 'next/navigation';

export const useSignupStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = store.auth.useAuthStore((s) => s.user);

  const stepParam = Number(searchParams.get('step'));
  const autoStep = (() => {
    if (!user?.email) return 1;
    if (!user.nickname || !user.profileUrl) return 2;
    if (!user.agreedTerms) return 3;
    return 4;
  })();

  const step = stepParam || autoStep;

  const setStep = (newStep: number) => {
    router.push(`/signup?step=${newStep}`);
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return { step, setStep, next, back };
};
