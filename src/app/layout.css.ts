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
  padding: pxToVw([16]),
  overflowY: 'auto',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw([16], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw([24], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw([24], DESKTOP_BREAKPOINT),
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
});
