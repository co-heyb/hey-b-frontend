import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const container = style({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {},
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {},
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
});
