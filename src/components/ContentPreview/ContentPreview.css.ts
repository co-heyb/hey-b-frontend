import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const baseContentPreviewWrapStyle = style({
  boxSizing: 'border-box',
  width: '100%',
  gap: pxToVw(12),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

export const contentPreviewWrapStyle = styleVariants({
  list: {},
  slide: {
    display: 'flex',
    overflowX: 'auto',
    padding: pxToVw([0, 16, 20]),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16, 20], MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16, 20], TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        padding: pxToVw([0, 16, 20], DESKTOP_BREAKPOINT),
      },
    },
  },
  column: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
  },
});
export const contentPreviewContentsStyle = style({
  width: '70%',
  flexShrink: 0,
});

export const baseContentPreviewStyle = style({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  flexShrink: 0,
  backgroundColor: vars.colors.white,
  selectors: {
    ['& + &']: {
      marginTop: pxToVw(56),
    },
    [`&:not(:has(${contentPreviewContentsStyle}))`]: {
      marginBottom: 0,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      selectors: {
        ['& + &']: {
          marginTop: pxToVw(56, MOBILE_LARGE_BREAKPOINT),
        },
        [`&:not(:has(${contentPreviewContentsStyle}))`]: {
          marginBottom: 0,
        },
      },
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      selectors: {
        ['& + &']: {
          marginTop: pxToVw(56, TABLET_BREAKPOINT),
        },
        [`&:not(:has(${contentPreviewContentsStyle}))`]: {
          marginBottom: 0,
        },
      },
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      selectors: {
        ['& + &']: {
          marginTop: pxToVw(56, DESKTOP_BREAKPOINT),
        },
        [`&:not(:has(${contentPreviewContentsStyle}))`]: {
          marginBottom: 0,
        },
      },
    },
  },
});
export const contentPreviewStyle = styleVariants({
  list: {
    display: 'flex',
    gap: pxToVw(10),
    padding: pxToVw([20, 0]),
    minHeight: pxToVw(112),
    borderTop: `1px solid ${vars.colors.background}`,
    borderBottom: `1px solid ${vars.colors.background}`,
    selectors: {
      [' &:last-of-type']: {
        borderBottom: 'none',
      },

      ['& + &']: {
        marginTop: '-1px',
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        gap: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
        padding: pxToVw([20, 0], MOBILE_LARGE_BREAKPOINT),
        minHeight: pxToVw(112, MOBILE_LARGE_BREAKPOINT),
        ['& + &']: {
          marginTop: pxToVw(-1, MOBILE_LARGE_BREAKPOINT),
        },
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        gap: pxToVw(10, TABLET_BREAKPOINT),
        padding: pxToVw([20, 0], TABLET_BREAKPOINT),
        minHeight: pxToVw(112, TABLET_BREAKPOINT),
        ['& + &']: {
          marginTop: pxToVw(-1, MOBILE_LARGE_BREAKPOINT),
        },
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        gap: pxToVw(10, DESKTOP_BREAKPOINT),
        padding: pxToVw([20, 0], DESKTOP_BREAKPOINT),
        minHeight: pxToVw(112, DESKTOP_BREAKPOINT),
        ['& + &']: {
          marginTop: pxToVw(-1, MOBILE_LARGE_BREAKPOINT),
        },
      },
    },
  },
  slide: {
    width: '40%',
    selectors: {
      ['& + &']: {
        marginTop: 0,
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        width: '28%',
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        width: '22%',
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
    },
  },
  column: {
    boxSizing: 'border-box',
    width: `calc(50% - ${pxToVw(6)})`,
    marginBottom: pxToVw(28),
    selectors: {
      ['& + &']: {
        marginTop: 0,
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        width: `calc(50% - ${pxToVw(6, MOBILE_LARGE_BREAKPOINT)})`,
        marginBottom: pxToVw(28, MOBILE_LARGE_BREAKPOINT),
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        width: `calc(33.3% - ${pxToVw(8, TABLET_BREAKPOINT)})`,
        marginBottom: pxToVw(28, TABLET_BREAKPOINT),
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        width: `calc(25% - ${pxToVw(9, DESKTOP_BREAKPOINT)})`,
        marginBottom: pxToVw(28, DESKTOP_BREAKPOINT),
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
    },
  },
});

export const contentPreviewActionsStyle = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: pxToVw(4),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});

export const baseContentPreviewTitleStyle = style({
  fontSize: pxToVw(14),
  marginTop: pxToVw(10),
  fontWeight: 700,
  lineHeight: 1.45,
  position: 'relative',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      marginTop: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      marginTop: pxToVw(10, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      marginTop: pxToVw(10, DESKTOP_BREAKPOINT),
    },
  },
});

export const contentPreviewTitleStyle = styleVariants({
  list: {
    marginTop: '0',
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        marginTop: pxToVw(0, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        marginTop: pxToVw(0, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        marginTop: pxToVw(0, DESKTOP_BREAKPOINT),
      },
    },
  },
  slide: {},
  column: {},
});

export const baseContentPreviewDescStyle = style({
  fontSize: pxToVw(12),
  marginTop: pxToVw(2),
  fontWeight: 500,
  color: vars.colors.charcoal,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
      marginTop: pxToVw(2, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, TABLET_BREAKPOINT),
      marginTop: pxToVw(2, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
      marginTop: pxToVw(2, DESKTOP_BREAKPOINT),
    },
  },
});

export const contentPreviewDescStyle = styleVariants({
  list: {},
  slide: {
    marginTop: pxToVw(4),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        marginTop: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        marginTop: pxToVw(4, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        marginTop: pxToVw(4, DESKTOP_BREAKPOINT),
      },
    },
  },
  column: {},
});

export const baseContentPreviewPriceStyle = style({
  display: 'flex',
  fontSize: pxToVw(14),
  fontWeight: 700,
  color: vars.colors.darkCharcoal,
  marginTop: pxToVw(4),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      marginTop: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      marginTop: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      marginTop: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});
export const contentPreviewPriceStyle = styleVariants({
  list: {},
  slide: {},
  column: {},
});

export const contentPreviewPriceSaleStyle = style({
  color: vars.colors.coral,
  marginRight: pxToVw(4),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      marginRight: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      marginRight: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      marginRight: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});
