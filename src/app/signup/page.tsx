'use client';

import Signup from '@/components/\bSignup';
import { Suspense } from 'react';

const SignupPage = () => {
  return (
    <section className="container center-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    </section>
  );
};

export default SignupPage;
