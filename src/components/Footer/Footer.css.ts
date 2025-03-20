import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  padding: pxToVw([20]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(20, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(20, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(20, DESKTOP_BREAKPOINT),
    },
  },
});
