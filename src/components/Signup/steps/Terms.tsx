'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import { useSignupStep } from '@/hooks/useSignupStep';
import InputToggle from '@/components/InputToggle';
import { useEffect, useState } from 'react';
import { termContent } from '../Signup.css';
import useCheckbox from '@/hooks/useCheckbox';

const StepTerms = () => {
  const { back, next } = useSignupStep();
  const [items, setItems] = useState<string[]>([
    'terms',
    'privacy',
    'age',
    'third-party',
    'content-license',
    'location',
    'payment',
  ]);

  const { checkedAll, checkedItems, handleCheckAll, handleItemCheck } = useCheckbox({ items });
  const [termsContent, setTermsContent] = useState<string>('');
  const [privacyContent, setPrivacyContent] = useState<string>('');
  const [thirdPartyContent, setThirdPartyContent] = useState<string>('');
  const [contentLicenseContent, setContentLicenseContent] = useState<string>('');
  const [locationContent, setLocationContent] = useState<string>('');
  const [paymentContent, setPaymentContent] = useState<string>('');

  useEffect(() => {
    fetch('/content/terms.html')
      .then((response) => response.text())
      .then((html) => setTermsContent(html))
      .catch((error) => console.error('Error loading terms HTML:', error));

    fetch('/content/privacy.html')
      .then((response) => response.text())
      .then((html) => setPrivacyContent(html))
      .catch((error) => console.error('Error loading privacy HTML:', error));

    fetch('/content/third-party.html')
      .then((response) => response.text())
      .then((html) => setThirdPartyContent(html))
      .catch((error) => console.error('Error loading third-party HTML:', error));

    fetch('/content/content-license.html')
      .then((response) => response.text())
      .then((html) => setContentLicenseContent(html))
      .catch((error) => console.error('Error loading third-party HTML:', error));

    fetch('/content/location.html')
      .then((response) => response.text())
      .then((html) => setLocationContent(html))
      .catch((error) => console.error('Error loading location HTML:', error));
    fetch('/content/location.html');

    fetch('/content/payment-terms.html')
      .then((response) => response.text())
      .then((html) => setPaymentContent(html))
      .catch((error) => console.error('Error loading location HTML:', error));
  }, []);

  return (
    <>
      <div className="text-center">
        <h2>약관 동의</h2>
        <p>서비스 이용을 위해 약관에 동의해주세요.</p>
      </div>
      <form>
        <InputToggle className="mt-20">
          <InputToggle.Input type="checkbox" checked={checkedAll} onChange={handleCheckAll}>
            전체동의
          </InputToggle.Input>
        </InputToggle>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="terms"
              onChange={() => handleItemCheck('terms')}
              checked={checkedItems.includes('terms')}
              required
            >
              [필수] 서비스 이용약관
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: termsContent }} />
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="privacy"
              onChange={() => handleItemCheck('privacy')}
              checked={checkedItems.includes('privacy')}
              required
            >
              [필수] 개인정보처리방침
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: privacyContent }} />
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="age"
              onChange={() => handleItemCheck('age')}
              checked={checkedItems.includes('age')}
              required
            >
              [필수] 만 14세 이상입니다.
            </InputToggle.Input>
          </InputToggle>
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="payment"
              onChange={() => handleItemCheck('payment')}
              checked={checkedItems.includes('payment')}
              required
            >
              [필수] 전자금융거래 이용약관
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: paymentContent }} />에 동의합니다.
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="third-party"
              onChange={() => handleItemCheck('third-party')}
              checked={checkedItems.includes('third-party')}
              required
            >
              [선택] 제3자 정보 제공 동의
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: thirdPartyContent }} />
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="content-license"
              onChange={() => handleItemCheck('content-license')}
              checked={checkedItems.includes('content-license')}
              required
            >
              [선택] 콘텐츠 활용 동의
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: contentLicenseContent }} />
        </div>
        <div>
          <InputToggle className="mt-20">
            <InputToggle.Input
              type="checkbox"
              value="location"
              onChange={() => handleItemCheck('location')}
              checked={checkedItems.includes('location')}
              required
            >
              [선택] 위치기반서비스 이용약관
            </InputToggle.Input>
          </InputToggle>
          <div className={termContent} dangerouslySetInnerHTML={{ __html: locationContent }} />
        </div>
        <div className="flex-center gap-10 mt-20">
          <Button size="medium" wide onClick={back}>
            이전
          </Button>
          <Button size="medium" wide colorFill="mint" type="submit" onClick={next}>
            다음
          </Button>
        </div>
      </form>
    </>
  );
};

export default StepTerms;
