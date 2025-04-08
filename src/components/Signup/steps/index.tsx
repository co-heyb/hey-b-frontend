import { useSignupStep } from '@/hooks/useSignupStep';
import StepCredentials from './Credentials';
import StepProfile from './Profile';
import StepTerms from './Terms';
import StepComplete from './Complete';

const Step = () => {
  const { step } = useSignupStep();

  switch (step) {
    case 1:
      return <StepCredentials />;
    case 2:
      return <StepProfile />;
    case 3:
      return <StepTerms />;
    case 4:
      return <StepComplete />;
    default:
      return null;
  }
};

export default Step;
