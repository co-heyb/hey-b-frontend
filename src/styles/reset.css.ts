import { globalStyle } from '@vanilla-extract/css';
import { hexToRgb } from './hexToRgb.css';
import { vars } from './theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from './px-to-vw.css';

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

globalStyle('input:placeholder', {
  fontFamily: `'Pretendard',  -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
});

globalStyle('html', {
  height: '100vh',
});

globalStyle('body:not(body.sb-show-main)', {
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.colors.white,
  color: vars.colors.darkCharcoal,
});

globalStyle('main', {
  flex: 1,
  overflowY: 'auto',
});

globalStyle('ul:not(.ProseMirror ul), ol:not(.ProseMirror ol)', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  display: 'inline-block',
  font: 'inherit',
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
    outline: `${pxToVw(2)} solid ${vars.colors.mint}`,
    outlineOffset: `${pxToVw(2)}`,
    borderRadius: `${pxToVw(4)}`,
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        outline: `${pxToVw(2, MOBILE_LARGE_BREAKPOINT)} solid ${vars.colors.mint}`,
        outlineOffset: `${pxToVw(2, MOBILE_LARGE_BREAKPOINT)}`,
        borderRadius: `${pxToVw(4, MOBILE_LARGE_BREAKPOINT)}`,
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        outline: `${pxToVw(2, TABLET_BREAKPOINT)} solid ${vars.colors.mint}`,
        outlineOffset: `${pxToVw(2, TABLET_BREAKPOINT)}`,
        borderRadius: `${pxToVw(4, TABLET_BREAKPOINT)}`,
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        outline: `${pxToVw(2, DESKTOP_BREAKPOINT)} solid ${vars.colors.mint}`,
        outlineOffset: `${pxToVw(2, DESKTOP_BREAKPOINT)}`,
        borderRadius: `${pxToVw(4, DESKTOP_BREAKPOINT)}`,
      },
    },
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
