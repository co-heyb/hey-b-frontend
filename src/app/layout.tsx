import '@/styles/reset.css';
import type { Metadata } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

export const metadata: Metadata = {
  title: 'HeyB - 나만의 취미를 발견하고 즐기는 플랫폼',
  description:
    'HeyB에서 나만의 취미를 찾아보세요. 체험 키트로 시작하고, 경험을 공유하며 즐거움을 나눌 수 있는 취미 플랫폼! 취미를 탐색하고, 나누고, 성장하세요.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    '취미',
    '취미 플랫폼',
    '체험 키트',
    '취미 공유',
    '취미 추천',
    'DIY',
    '나만의 취미',
    'HeyB',
    '취미 커뮤니티',
    '성장',
  ],
  // authors: [{ name: "HeyB Team", url: "https://www.heyb.com" }],
  openGraph: {
    title: 'HeyB - 나만의 취미를 발견하고 즐기는 플랫폼',
    description:
      'HeyB에서 나만의 취미를 찾아보세요. 체험 키트로 시작하고, 경험을 공유하며 즐거움을 나눌 수 있는 취미 플랫폼! 취미를 탐색하고, 나누고, 성장하세요.',
    // url: "https://www.heyb.com",
    siteName: 'HeyB',
    locale: 'ko_KR',
    type: 'website',
    // images: [
    //   {
    //     url: "https://www.heyb.com/images/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "HeyB - 나만의 취미를 발견하고 즐기는 플랫폼",
    //   },
    // ],
  },
};

// const pretendard = localFont({
//   src: '../../public/fonts/pretendard/PretendardVariable.woff2',
//   variable: '--font-pretendard',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
