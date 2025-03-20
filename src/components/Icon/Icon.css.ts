import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const iconVariants = {
  size: {
    small: {
      width: pxToVw(16),
      height: pxToVw(16),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          width: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
          height: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          width: pxToVw(16, TABLET_BREAKPOINT),
          height: pxToVw(16, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          width: pxToVw(16, DESKTOP_BREAKPOINT),
          height: pxToVw(16, DESKTOP_BREAKPOINT),
        },
      },
    },
    medium: {
      width: pxToVw(24),
      height: pxToVw(24),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          width: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
          height: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          width: pxToVw(24, TABLET_BREAKPOINT),
          height: pxToVw(24, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          width: pxToVw(24, DESKTOP_BREAKPOINT),
          height: pxToVw(24, DESKTOP_BREAKPOINT),
        },
      },
    },
    large: {
      width: pxToVw(30),
      height: pxToVw(30),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          width: pxToVw(30, MOBILE_LARGE_BREAKPOINT),
          height: pxToVw(30, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          width: pxToVw(30, TABLET_BREAKPOINT),
          height: pxToVw(30, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          width: pxToVw(30, DESKTOP_BREAKPOINT),
          height: pxToVw(30, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
  colorFill: {
    darkCharcoal: {
      filter: vars.colorFilter.blackToDarkCharcoal,
    },
    mint: {
      filter: vars.colorFilter.blackToActiveMint,
    },
    coral: {
      filter: vars.colorFilter.blackToCoral,
    },
    white: {
      filter: vars.colorFilter.blackToWhite,
    },
  },
};

export const icon = style({});
export const iconSize = styleVariants({
  ...iconVariants.size,
});
export const iconColorFill = styleVariants({
  ...iconVariants.colorFill,
});
