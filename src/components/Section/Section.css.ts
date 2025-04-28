import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { style } from '@vanilla-extract/css';

export const sectionHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: pxToVw(16),
});

export const sectionTitleStyle = style({
  fontSize: pxToVw(18),
  fontWeight: 'bold',
  margin: 0,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
      margin: 0,
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, TABLET_BREAKPOINT),
      margin: 0,
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
      margin: 0,
    },
  },
});
export const sectionContentStyle = style({
  display: 'flex',
  padding: pxToVw([4, 16, 16]),
  selectors: {
    ['&.no-padding-x']: {
      paddingLeft: pxToVw(0),
      paddingRight: pxToVw(0),
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      selectors: {
        ['&.no-padding-x']: {
          paddingLeft: pxToVw(0),
          paddingRight: pxToVw(0),
        },
      },
      padding: pxToVw([4, 16, 16], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      selectors: {
        ['&.no-padding-x']: {
          paddingLeft: pxToVw(0),
          paddingRight: pxToVw(0),
        },
      },
      padding: pxToVw([4, 16, 16], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      selectors: {
        ['&.no-padding-x']: {
          paddingLeft: pxToVw(0),
          paddingRight: pxToVw(0),
        },
      },
      padding: pxToVw([4, 16, 16], DESKTOP_BREAKPOINT),
    },
  },
});
