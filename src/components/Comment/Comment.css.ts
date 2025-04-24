import { style } from '@vanilla-extract/css';
import { userProfileBase } from '../UserProfile/UserProfile.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const comment = style({
  fontSize: pxToVw(12),
  width: '100%',

  selectors: {
    [`${userProfileBase} &`]: {
      paddingLeft: pxToVw(40),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
          paddingLeft: pxToVw(40, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          fontSize: pxToVw(14, TABLET_BREAKPOINT),
          paddingLeft: pxToVw(44, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          fontSize: pxToVw(16, DESKTOP_BREAKPOINT),
          paddingLeft: pxToVw(48, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});
