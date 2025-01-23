import { createTheme, createThemeContract } from '@vanilla-extract/css';

// 1. 테마 계약 (CSS 변수 정의)
export const themeContract = createThemeContract({
  colors: {
    mint: null,
    coral: null,
    softYellow: null,
    darkCharcoal: null,
    charcoal: null,
    white: null,
    black: null,
    lightYellow: null,
    softMint: null,
    lightMint: null,
    beige: null,
  },
  spacing: {
    none: null,
    small: null,
    medium: null,
    large: null,
    extraLarge: null,
  },
  borderRadius: {
    small: null,
    medium: null,
    large: null,
  },
});

// 2. 테마 값 (디자인 토큰)
export const theme = createTheme(themeContract, {
  colors: {
    // 주요 색상
    mint: '#A3DAD1', // 메인 배경 및 주요 영역, CTA
    coral: '#DE542C', // CTA, 경고, 강조 텍스트
    softYellow: '#F3E5AB', // 서브 배경 및 강조 섹션

    // 텍스트 색상
    darkCharcoal: '#3B4A57', // 주요 텍스트 (헤더, 본문)
    charcoal: '#4E5D6C', // 보조 텍스트 및 설명 텍스트
    white: '#FFFFFF', // 흰색
    black: '#000000', // 검정색

    // 액센트 색상
    lightYellow: '#FFF8B3', // 카드 배경, 섹션 구분
    softMint: '#78C6C4', // 버튼 호버, 강조된 배경
    lightMint: '#B7D3D2', // 탐색 페이지 배경 및 대체 섹션
    beige: '#EDC7B7', // 강조 배경 및 따뜻한 느낌의 섹션
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
