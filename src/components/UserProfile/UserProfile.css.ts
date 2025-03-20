import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const userProfileBase = style({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const userProfile = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileLinkBase = style({
  display: 'flex',
});

export const userProfileImgBase = style({
  borderRadius: '50%',
  border: `1px solid ${vars.colors.charcoal}`,
  flexShrink: 0,
});
export const userProfileImg = styleVariants({
  list: {
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
  detail: {
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
  comment: {
    position: 'absolute',
    top: 0,
    left: 0,
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
  profile: {
    width: pxToVw(50),
    height: pxToVw(50),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        width: pxToVw(50, MOBILE_LARGE_BREAKPOINT),
        height: pxToVw(50, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        width: pxToVw(50, TABLET_BREAKPOINT),
        height: pxToVw(50, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        width: pxToVw(50, DESKTOP_BREAKPOINT),
        height: pxToVw(50, DESKTOP_BREAKPOINT),
      },
    },
  },
});

export const userProfileNameBase = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  selectors: {
    [`${userProfileImgBase} + &`]: {
      marginLeft: pxToVw(10),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          marginLeft: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          marginLeft: pxToVw(10, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          marginLeft: pxToVw(10, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});

export const userProfileName = styleVariants({
  list: {
    fontSize: pxToVw(18),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
      },
    },
  },
  detail: {
    fontSize: pxToVw(14),
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
  comment: {
    fontSize: pxToVw(14),
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
    selectors: {
      [`${userProfileImgBase} + &`]: {
        marginLeft: pxToVw(40),
        '@media': {
          [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(40, MOBILE_LARGE_BREAKPOINT),
          },
          [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(40, TABLET_BREAKPOINT),
          },
          [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(40, DESKTOP_BREAKPOINT),
          },
        },
      },
    },
  },
  profile: {
    fontSize: pxToVw(18),
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, TABLET_BREAKPOINT),
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
      },
    },
  },
});

export const userProfileDescBase = style({
  fontWeight: 500,
  fontSize: pxToVw(12),
  color: vars.colors.charcoal,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

export const userProfileDesc = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileFollowBtnBase = style({
  selectors: {
    [`${userProfileImgBase} + &`]: {
      marginTop: pxToVw(20),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          marginTop: pxToVw(20, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          marginTop: pxToVw(20, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          marginTop: pxToVw(20, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});
export const userProfileFollowBtn = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileWrapBase = style({ display: 'flex', alignItems: 'center' });
export const userProfileWrap = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: { flexDirection: 'column', alignItems: 'flex-start' },
});
