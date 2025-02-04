import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { createGlobalTheme } from '@vanilla-extract/css';

// Pretendard 폰트 등록
globalFontFace('Pretendard', {
  src: `
    local("Pretendard Variable"),
    url("/fonts/pretendardvariable.woff2") format("woff2")
  `,
  fontDisplay: 'swap',
});

// Pretendard를 body에 글로벌로 적용
globalStyle('body', {
  fontFamily:
    '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  lineHeight: '1.5',
});

// 📌 전역 테마 정의 (Global Theme)
export const vars = createGlobalTheme(':root', {
  colors: {
    mint: '#A3DAD1', // 메인 배경 및 주요 영역, CTA
    coral: '#DE542C', // CTA, 경고, 강조 텍스트
    softYellow: '#F3E5AB', // 서브 배경 및 강조 섹션

    darkCharcoal: '#3B4A57', // 주요 텍스트
    charcoal: '#4E5D6C', // 보조 텍스트
    white: '#FFFFFF',
    black: '#000000',

    lightYellow: '#FFF8B3', // 카드 배경
    softMint: '#78C6C4', // 버튼 호버, 강조된 배경
    lightMint: '#B7D3D2', // 탐색 페이지 배경
    beige: '#EDC7B7', // 강조 배경
  },
  spacing: {
    none: '0px',
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
});
