import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const tabList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: pxToVw(78),
  padding: pxToVw([15, 12]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      height: pxToVw(78, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw([15, 12], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      height: pxToVw(78, TABLET_BREAKPOINT),
      padding: pxToVw([15, 12], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      height: pxToVw(78, DESKTOP_BREAKPOINT),
      padding: pxToVw([15, 12], DESKTOP_BREAKPOINT),
    },
  },
});

export const tabItem = styleVariants({
  default: {
    display: 'flex',
    flex: 1,
    gap: pxToVw(8),
    height: '100%',
    fontSize: pxToVw(12),
    fontWeight: 600,
    color: vars.colors.darkCharcoal,
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        gap: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
        fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        gap: pxToVw(8, TABLET_BREAKPOINT),
        fontSize: pxToVw(12, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        gap: pxToVw(8, DESKTOP_BREAKPOINT),
        fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
      },
    },
  },
  active: {
    color: vars.colors.activeMint,
    fontWeight: 700,
  },
});

export const tabItemLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  color: 'inherit',
  fontWeight: 'inherit',
});
