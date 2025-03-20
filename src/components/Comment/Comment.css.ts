import { style } from '@vanilla-extract/css';
import { userProfileBase } from '../UserProfile/UserProfile.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const comment = style({
  selectors: {
    [`${userProfileBase} &`]: {
      paddingLeft: pxToVw(40),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw(40, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw(40, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw(40, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});
