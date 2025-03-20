import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: pxToVw(50),
  padding: pxToVw(16),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      height: pxToVw(50, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      height: pxToVw(50, TABLET_BREAKPOINT),
      padding: pxToVw(16, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      height: pxToVw(50, DESKTOP_BREAKPOINT),
      padding: pxToVw(16, DESKTOP_BREAKPOINT),
    },
  },
});

export const logo = style({
  display: 'flex',
  width: pxToVw(45),
  height: pxToVw(28),
  backgroundImage: "url('/images/logo.svg?v=1.0.0')",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(45, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(28, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(45, TABLET_BREAKPOINT),
      height: pxToVw(28, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(45, DESKTOP_BREAKPOINT),
      height: pxToVw(28, DESKTOP_BREAKPOINT),
    },
  },
});

export const headerHidden = style({
  position: 'absolute',
  clip: 'rect(0 0 0 0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
});

export const headerIcons = style({
  display: 'flex',
  gap: pxToVw(8),
});
