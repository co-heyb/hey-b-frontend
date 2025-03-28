import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { createGlobalTheme } from '@vanilla-extract/css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from './px-to-vw.css';

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
  fontSize: pxToVw(12),
  fontFamily:
    '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  lineHeight: '1.5',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

export const theme = {
  colors: {
    mint: '#A3DAD1', // 메인 배경 및 주요 영역, CTA
    activeMint: '#309F92', // Active 상태용 진한 Mint
    coral: '#DE542C', // CTA, 경고, 강조 텍스트
    softYellow: '#F3E5AB', // 서브 배경 및 강조 섹션
    darkCharcoal: '#303C47', // 주요 텍스트
    charcoal: '#5A6A7C', // 보조 텍스트
    lightCharcoal: '#B6BABC', // 비활성화, border등
    lightYellow: '#FFF8B3', // 카드 배경
    softMint: '#78C6C4', // 버튼 호버, 강조된 배경
    lightMint: '#B7D3D2', // 탐색 페이지 배경
    beige: '#EDC7B7', // 강조 배경
    background: '#F3F4F6',
    white: '#FFFFFF',
    black: '#000000',
  },
  colorFilter: {
    blackToDarkCharcoal: 'brightness(0.4) contrast(1.2) grayscale(1)',
    blackToMint: 'invert(82%) sepia(18%) saturate(270%) hue-rotate(126deg)',
    blackToActiveMint: 'invert(68%) sepia(28%) saturate(310%) hue-rotate(136deg) brightness(94%) contrast(97%)',
    blackToCoral: 'invert(62%) sepia(50%) saturate(410%) hue-rotate(-6deg) contrast(103%)',
    blackToWhite: 'invert(1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
};

export const vars = createGlobalTheme(':root', theme);
