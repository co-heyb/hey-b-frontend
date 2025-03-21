import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { hexToRgb } from '@/styles/hexToRgb.css';

const buttonBase = {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  gap: pxToVw(4),
  border: `1px solid transparent`,
  borderRadius: pxToVw(6),
  padding: pxToVw(8),
  fontWeight: 600,
  flexShrink: 0,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(6, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(4, TABLET_BREAKPOINT),
      borderRadius: pxToVw(6, TABLET_BREAKPOINT),
      padding: pxToVw(8, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(4, DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(6, DESKTOP_BREAKPOINT),
      padding: pxToVw(8, DESKTOP_BREAKPOINT),
    },
  },
  ['&:hover, &:active, &:focus']: {
    opacity: 0.75,
  },
};

const buttonVariants = {
  size: {
    extraSmall: {
      padding: pxToVw([4, 8]),
      fontSize: pxToVw(10),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw([4, 8], MOBILE_LARGE_BREAKPOINT),
          fontSize: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw([4, 8], TABLET_BREAKPOINT),
          fontSize: pxToVw(10, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw([4, 8], DESKTOP_BREAKPOINT),
          fontSize: pxToVw(10, DESKTOP_BREAKPOINT),
        },
      },
    },
    small: {
      padding: pxToVw([6, 12]),
      fontSize: pxToVw(12),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw([6, 12], MOBILE_LARGE_BREAKPOINT),
          fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw([6, 12], TABLET_BREAKPOINT),
          fontSize: pxToVw(12, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw([6, 12], DESKTOP_BREAKPOINT),
          fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
        },
      },
    },
    medium: {
      padding: pxToVw([8, 16]),
      borderRadius: pxToVw(8),
      fontSize: pxToVw(14),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw([8, 16], MOBILE_LARGE_BREAKPOINT),
          borderRadius: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
          fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw([8, 16], TABLET_BREAKPOINT),
          borderRadius: pxToVw(8, TABLET_BREAKPOINT),
          fontSize: pxToVw(14, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw([8, 16], DESKTOP_BREAKPOINT),
          borderRadius: pxToVw(8, DESKTOP_BREAKPOINT),
          fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
        },
      },
    },
    large: {
      padding: pxToVw([10, 22]),
      borderRadius: pxToVw(10),
      fontSize: pxToVw(16),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw([10, 22], MOBILE_LARGE_BREAKPOINT),
          borderRadius: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
          fontSize: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw([10, 22], TABLET_BREAKPOINT),
          borderRadius: pxToVw(10, TABLET_BREAKPOINT),
          fontSize: pxToVw(16, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw([10, 22], DESKTOP_BREAKPOINT),
          borderRadius: pxToVw(10, DESKTOP_BREAKPOINT),
          fontSize: pxToVw(16, DESKTOP_BREAKPOINT),
        },
      },
    },
    extraLarge: {
      padding: pxToVw([12, 22]),
      borderRadius: pxToVw(10),
      fontSize: pxToVw(18),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw([12, 22], MOBILE_LARGE_BREAKPOINT),
          borderRadius: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
          fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw([12, 22], TABLET_BREAKPOINT),
          borderRadius: pxToVw(10, TABLET_BREAKPOINT),
          fontSize: pxToVw(18, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw([12, 22], DESKTOP_BREAKPOINT),
          borderRadius: pxToVw(10, DESKTOP_BREAKPOINT),
          fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
  wide: { true: { width: '100%', flexShrink: 1, flexGrow: 1 } },
  radius: {
    rect: {
      borderRadius: 0,
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          borderRadius: 0,
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          borderRadius: 0,
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          borderRadius: 0,
        },
      },
    },
    circle: {
      padding: pxToVw(6),
      borderRadius: '50%',
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw(6, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw(6, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw(6, DESKTOP_BREAKPOINT),
        },
      },
      ['&::before']: {
        content: '""',
        display: 'block',
        paddingTop: '100%',
        marginLeft: pxToVw(-4),
        '@media': {
          [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, MOBILE_LARGE_BREAKPOINT),
          },
          [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, TABLET_BREAKPOINT),
          },
          [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, DESKTOP_BREAKPOINT),
          },
        },
      },
    },
  },
  variant: {
    filled: {
      background: vars.colors.darkCharcoal,
      color: vars.colors.white,

      ['&:disabled']: {
        color: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.3)`,
        backgroundColor: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.04)`,
      },
    },
    outline: {
      background: vars.colors.white,
      borderColor: vars.colors.darkCharcoal,
      color: vars.colors.darkCharcoal,

      ['&:disabled']: {
        color: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.3)`,
        borderColor: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.1)`,
      },
    },
    plain: {
      background: vars.colors.white,
      color: vars.colors.charcoal,
      padding: 0,
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: 0,
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: 0,
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: 0,
        },
      },
      ['&:disabled']: {
        color: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.3)`,
      },
    },
    plainRect: {
      background: vars.colors.white,
      padding: pxToVw(6),
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: pxToVw(6, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: pxToVw(6, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: pxToVw(6, DESKTOP_BREAKPOINT),
        },
      },
      ['&::before']: {
        content: '""',
        display: 'block',
        paddingTop: '100%',
        marginLeft: pxToVw(-4),
        '@media': {
          [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, MOBILE_LARGE_BREAKPOINT),
          },
          [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, TABLET_BREAKPOINT),
          },
          [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
            marginLeft: pxToVw(-4, DESKTOP_BREAKPOINT),
          },
        },
      },
    },
    underline: {
      background: vars.colors.white,
      color: vars.colors.darkCharcoal,
      textDecoration: 'underline',
      padding: 0,
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          padding: 0,
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          padding: 0,
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          padding: 0,
        },
      },
      ['&:disabled']: {
        color: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.3)`,
      },
    },
  },
  // with filled
  colorFill: {
    mint: {
      background: vars.colors.mint,
      color: vars.colors.darkCharcoal,
    },
    coral: {
      background: vars.colors.coral,
      color: vars.colors.white,
    },
  },
};
export const button = recipe({
  base: {
    ...buttonBase,
  },
  variants: { ...buttonVariants },
  defaultVariants: {
    variant: 'filled',
    size: 'small',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
