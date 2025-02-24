import Footer from '@/components/\bFooter';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import 'remixicon/fonts/remixicon.css';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles/reset.css';
import type { Metadata } from 'next';
import { container } from './layout.css';

export const metadata: Metadata = {
  title: 'HeyB - 작은 시작이 만드는 새로운 즐거움',
  description:
    '아무것도 안 해도 괜찮아요. 하지만, 가볍게 시작하면 더 즐거워질 거예요. 취미를 찾고, 작은 도전을 해보고, 함께 경험을 나누세요. 혼자보다는 같이, 더 나은 나를 만들어가는 곳. HeyB에서 당신의 변화를 만나보세요.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    '작은 도전',
    '목표',
    '취미',
    '취미 플랫폼',
    'DIY',
    '체험 키트',
    '취미 공유',
    '취미 추천',
    '나만의 취미',
    '습관 만들기',
    '새로운 시작',
    '커뮤니티',
    '취미 커뮤니티',
    '도전',
    '응원',
    '변화',
    '성장',
    'HeyB',
  ],
  // authors: [{ name: "HeyB Team", url: "https://www.heyb.com" }],
  openGraph: {
    title: 'HeyB - 작은 시작이 만드는 새로운 즐거움',
    description:
      '아무것도 안 해도 괜찮아요. 하지만, 가볍게 시작하면 더 즐거워질 거예요. 취미를 찾고, 작은 도전을 해보고, 함께 경험을 나누세요. 혼자보다는 같이, 더 나은 나를 만들어가는 곳. HeyB에서 당신의 변화를 만나보세요.',
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

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <div className={container}>
          <Header />
          <main>{children}</main>
          <Footer />
          <TabBar />
        </div>
      </body>
    </html>
  );
}
