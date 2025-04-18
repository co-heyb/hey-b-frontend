import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { NoDataSectionStyle } from '../NoDataSection/NoDataSection.css';

export const baseTabsListStyle = style({
  listStyle: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  overscrollBehavior: 'none',
});
export const tabsListStyle = styleVariants({
  underline: {},
  round: {
    backgroundColor: vars.colors.background,
    padding: 0,
    gap: pxToVw(4),
    borderRadius: pxToVw(12),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: 0,
        gap: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
        borderRadius: pxToVw(12),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: 0,
        gap: pxToVw(4, TABLET_BREAKPOINT),
        borderRadius: pxToVw(12, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: 0,
        gap: pxToVw(4, DESKTOP_BREAKPOINT),
        borderRadius: pxToVw(12, DESKTOP_BREAKPOINT),
      },
    },
  },
  capsule: {
    padding: pxToVw([12, 16]),
    gap: pxToVw(4),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], MOBILE_LARGE_BREAKPOINT),
        gap: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], TABLET_BREAKPOINT),
        gap: pxToVw(4, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], DESKTOP_BREAKPOINT),
        gap: pxToVw(4, DESKTOP_BREAKPOINT),
      },
    },
  },
  rect: {
    padding: pxToVw(0, 16),
    borderTop: `1px solid ${vars.colors.background}`,
    borderBottom: `1px solid ${vars.colors.background}`,
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16], DESKTOP_BREAKPOINT),
      },
    },
  },
});

export const baseTabsItemStyle = style({
  color: vars.colors.lightCharcoal,
  fontSize: pxToVw(14),
  fontWeight: 500,
  flex: 1,
  selectors: {
    ['&.auto-width']: {
      flexBasis: 'auto',
      flexShrink: 0,
    },

    [' &.active']: {
      borderColor: vars.colors.darkCharcoal,
      color: vars.colors.darkCharcoal,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
    },
  },
});
export const tabsItemStyle = styleVariants({
  underline: {
    borderBottom: `${pxToVw(3)} solid ${vars.colors.background}`,
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        borderBottom: `${pxToVw(3, MOBILE_LARGE_BREAKPOINT)} solid ${vars.colors.background}`,
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        borderBottom: `${pxToVw(3, TABLET_BREAKPOINT)} solid ${vars.colors.background}`,
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        borderBottom: `${pxToVw(3, DESKTOP_BREAKPOINT)} solid ${vars.colors.background}`,
      },
    },
  },
  round: {
    fontSize: pxToVw(14),
    lineHeight: 1.2,
    fontWeight: 400,
    flex: 1,
    borderRadius: pxToVw(8),

    selectors: {
      ['&.active']: {
        backgroundColor: vars.colors.darkCharcoal,
        color: vars.colors.white,
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], MOBILE_LARGE_BREAKPOINT),
        fontSize: pxToVw(14),
        borderRadius: pxToVw(8),
        ['&.active']: {},
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], TABLET_BREAKPOINT),
        fontSize: pxToVw(14),
        borderRadius: pxToVw(8),
        ['&.active']: {},
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], DESKTOP_BREAKPOINT),
        fontSize: pxToVw(14),
        borderRadius: pxToVw(8),
        ['&.active']: {},
      },
    },
  },
  capsule: {
    color: vars.colors.darkCharcoal,
    border: `1px solid ${vars.colors.darkCharcoal}`,
    fontSize: pxToVw(14),
    lineHeight: 1.2,
    fontWeight: 400,
    borderRadius: pxToVw(28),

    selectors: {
      ['&.active']: {
        backgroundColor: vars.colors.darkCharcoal,
        color: vars.colors.white,
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
        borderRadius: pxToVw(28, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, TABLET_BREAKPOINT),
        borderRadius: pxToVw(28, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
        borderRadius: pxToVw(28, DESKTOP_BREAKPOINT),
      },
    },
  },
  rect: {
    color: vars.colors.background,
    fontSize: pxToVw(14),
    lineHeight: 1.5,
    fontWeight: 600,
    flexShrink: 0,

    selectors: {
      ['&.active']: {
        color: vars.colors.darkCharcoal,
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      },
    },
  },
});

export const baseTabsContentStyle = style({
  padding: pxToVw([24, 0]),
  selectors: {
    ['&.center']: {
      textAlign: 'center',
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw([24, 0], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw([24, 0], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw([24, 0], DESKTOP_BREAKPOINT),
    },
  },
});

export const tabsContentStyle = styleVariants({
  underline: {},
  round: {
    padding: pxToVw([20, 0, 0]),
    selectors: {
      ['&.center']: {
        textAlign: 'center',
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([20, 0, 0], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([20, 0, 0], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([20, 0, 0], DESKTOP_BREAKPOINT),
      },
    },
  },
  capsule: {
    padding: pxToVw([0, 0, 70]),
    selectors: {
      [`&:has(${NoDataSectionStyle})`]: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 0, 70], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 0, 70], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 0, 70], DESKTOP_BREAKPOINT),
      },
    },
  },
  rect: {
    paddingTop: pxToVw(20),
    selectors: {
      ['&.center']: {
        textAlign: 'center',
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([20], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([20], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([20], DESKTOP_BREAKPOINT),
      },
    },
  },
});

export const baseTabItemButtonStyle = style({
  width: '100%',
  height: '100%',
  color: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  backgroundColor: 'transparent',
  fontSize: 'inherit',
  borderRadius: pxToVw(0),
  padding: pxToVw(10),

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
      fontSize: 'inherit',
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(10, TABLET_BREAKPOINT),
      borderRadius: pxToVw(0, TABLET_BREAKPOINT),
      fontSize: 'inherit',
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(10, DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(0, DESKTOP_BREAKPOINT),
      fontSize: 'inherit',
    },
  },
});

export const tabsItemButtonStyle = styleVariants({
  underline: {},
  round: {
    padding: pxToVw([7.5, 8]),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([7.5, 8], DESKTOP_BREAKPOINT),
      },
    },
  },
  capsule: {
    padding: pxToVw([8, 12]),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([8, 12], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([8, 12], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([8, 12], DESKTOP_BREAKPOINT),
      },
    },
  },
  rect: {
    padding: pxToVw([12, 16]),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([12, 16], DESKTOP_BREAKPOINT),
      },
    },
  },
});
