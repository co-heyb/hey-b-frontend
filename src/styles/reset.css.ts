import { globalStyle } from '@vanilla-extract/css';

// Reset 기본 스타일
globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
  fontSize: '16px',
  lineHeight: 1.5,
  fontFamily: `'Pretendard', Arial, sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  color: '#333333',
});

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  all: 'unset', // 모든 버튼 스타일 초기화
  fontFamily: 'inherit',
  cursor: 'pointer',
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});
