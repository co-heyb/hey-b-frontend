import { globalStyle } from '@vanilla-extract/css';
import { hexToRgb } from './hexToRgb.css';
import { vars } from './theme.css';
import { pxToVw } from './px-to-vw.css';

// Reset 기본 스타일
globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
  fontSize: pxToVw(12),
  lineHeight: 1.5,
  fontFamily: `'Pretendard',  -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});
globalStyle('input:placeholder', {
  fontFamily: `'Pretendard',  -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  color: vars.colors.darkCharcoal,
});

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  display: 'inline-block',
});

globalStyle('button, a', {
  WebkitTapHighlightColor: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.1)`,
});

globalStyle('button, a, input[type="submit"], input[type="reset"]', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',
});

globalStyle(
  'button:focus-visible, a:focus-visible, input[type="submit"]:focus-visible, input[type="reset"]:focus-visible',
  {
    outline: `2px solid ${vars.colors.mint}`,
    outlineOffset: '2px',
    borderRadius: '4px',
  },
);

globalStyle('button:focus:not(:focus-visible), a:focus:not(:focus-visible), input:focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('button:disabled, input[type="submit"]:disabled, input[type="reset"]:disabled', {
  cursor: 'not-allowed',
  opacity: 0.6,
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});
