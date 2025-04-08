import { style, globalStyle } from '@vanilla-extract/css';
import { theme, vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const container = style({
  marginRight: pxToVw(-16),
  paddingRight: pxToVw(-16),
  maxWidth: '100%',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      marginRight: pxToVw(-16, MOBILE_LARGE_BREAKPOINT),
      paddingRight: pxToVw(-16, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      marginRight: pxToVw(-16, TABLET_BREAKPOINT),
      paddingRight: pxToVw(-1, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      marginRight: pxToVw(-16, DESKTOP_BREAKPOINT),
      paddingRight: pxToVw(-16, DESKTOP_BREAKPOINT),
    },
  },
});

export const topCategoryList = style({
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%',
  overflow: 'auto',
  gap: pxToVw(10),
  padding: pxToVw(10),
  paddingLeft: pxToVw(4),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
      paddingLeft: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(10, TABLET_BREAKPOINT),
      padding: pxToVw(10, TABLET_BREAKPOINT),
      paddingLeft: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(10, DESKTOP_BREAKPOINT),
      padding: pxToVw(10, DESKTOP_BREAKPOINT),
      paddingLeft: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});

export const topCategoryItem = style({
  backgroundColor: vars.colors.white,
  padding: pxToVw(10),
  borderRadius: pxToVw(9),
  boxShadow: `0 ${pxToVw(4)} ${pxToVw(8)} rgba(0, 0, 0, 0.1)`,
  minWidth: pxToVw(200),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(9, MOBILE_LARGE_BREAKPOINT),
      boxShadow: `0 ${pxToVw(4, MOBILE_LARGE_BREAKPOINT)} ${pxToVw(8, MOBILE_LARGE_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
      minWidth: pxToVw(200, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(10, TABLET_BREAKPOINT),
      borderRadius: pxToVw(9, TABLET_BREAKPOINT),
      boxShadow: `0 ${pxToVw(4, TABLET_BREAKPOINT)} ${pxToVw(8, TABLET_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
      minWidth: pxToVw(200, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(10, DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(9, DESKTOP_BREAKPOINT),
      boxShadow: `0 ${pxToVw(4, DESKTOP_BREAKPOINT)} ${pxToVw(8, DESKTOP_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
      minWidth: pxToVw(200, DESKTOP_BREAKPOINT),
    },
  },
});

export const topCategoryTitle = style({
  fontSize: pxToVw(14),
  marginBottom: pxToVw(10),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      marginBottom: pxToVw(10, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(10, DESKTOP_BREAKPOINT),
    },
  },
});

export const categoryItem = style({
  display: 'flex',
  width: '100%',
  padding: pxToVw([3, 10]),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderRadius: pxToVw(99),
  fontSize: pxToVw(13),
  marginBottom: pxToVw(3),
  selectors: {
    ['&:has(input:checked)']: {
      border: `1px solid ${vars.colors.mint}`,
      background: `rgba(${vars.rgbColors.mint}, 0.3)`,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw([3, 10], MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(99, MOBILE_LARGE_BREAKPOINT),
      fontSize: pxToVw(13, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(3, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw([3, 10], TABLET_BREAKPOINT),
      borderRadius: pxToVw(99, TABLET_BREAKPOINT),
      fontSize: pxToVw(13, TABLET_BREAKPOINT),
      marginBottom: pxToVw(3, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw([3, 10], DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(99, DESKTOP_BREAKPOINT),
      fontSize: pxToVw(13, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(3, DESKTOP_BREAKPOINT),
    },
  },
});

export const categoryDesc = style({
  color: vars.colors.charcoal,
  fontSize: pxToVw(11),
  marginBottom: pxToVw(10),
  lineHeight: 1.3,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(11, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(11, TABLET_BREAKPOINT),
      marginBottom: pxToVw(10, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(11, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(10, DESKTOP_BREAKPOINT),
    },
  },
});
