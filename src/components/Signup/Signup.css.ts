import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: pxToVw(400),
  margin: '0 auto',
  padding: pxToVw([40, 16]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw([40, 16], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, TABLET_BREAKPOINT),
      padding: pxToVw([40, 16], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, DESKTOP_BREAKPOINT),
      padding: pxToVw([40, 16], DESKTOP_BREAKPOINT),
    },
  },
});

export const heading = style({
  marginBottom: pxToVw(32),

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      marginBottom: pxToVw(32, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      marginBottom: pxToVw(32, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      marginBottom: pxToVw(32, DESKTOP_BREAKPOINT),
    },
  },
});

export const termContent = style({
  overflow: 'auto',
  width: '100%',
  height: pxToVw(200),
  padding: pxToVw(20),
  margin: pxToVw([10, 0]),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  backgroundColor: vars.colors.background,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      height: pxToVw(200, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(20, MOBILE_LARGE_BREAKPOINT),
      margin: pxToVw([10, 0], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      height: pxToVw(200, TABLET_BREAKPOINT),
      padding: pxToVw(20, TABLET_BREAKPOINT),
      margin: pxToVw([10, 0], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      height: pxToVw(200, DESKTOP_BREAKPOINT),
      padding: pxToVw(20, DESKTOP_BREAKPOINT),
      margin: pxToVw([10, 0], DESKTOP_BREAKPOINT),
    },
  },
});
