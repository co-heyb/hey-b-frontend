import { bounce } from '@/styles/animation.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const inputToggle = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    selectors: {
      ['& + &']: {
        marginTop: pxToVw(10),
      },
    },
    '@media': {
      [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(10, TABLET_BREAKPOINT),
          },
        },
      },
      [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
        selectors: {
          ['& + &']: {
            marginTop: pxToVw(10, DESKTOP_BREAKPOINT),
          },
        },
      },
    },
  },
  variants: {
    status: {
      error: {
        color: vars.colors.coral,
        MozAnimation: `${bounce}`,
        WebkitAnimation: `${bounce}`,
        OAnimation: `${bounce}`,
        animation: `${bounce}`,
        animationDuration: '.5s',
        animationDelay: '0.25s',
      },
      disabled: {
        color: `${vars.colors.darkCharcoal} !important`,
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
});

export const inputIcon = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignSelf: 'center',
  border: `1px solid ${vars.colors.lightCharcoal}`,
  marginRight: pxToVw(6),
  padding: '1px',
  selectors: {
    [`${inputToggle()}:has(input:disabled) &`]: {
      backgroundColor: vars.colors.lightCharcoal,
    },
    [`input[type='checkbox'] + &`]: {
      borderRadius: pxToVw(5),
    },
    [`input[type='radio'] + &`]: {
      borderRadius: '50%',
    },
    [`input:checked + &`]: {
      background: vars.colors.darkCharcoal,
      borderColor: vars.colors.darkCharcoal,
    },
    [`${inputToggle({ status: 'error' }).split(' ').at(-1)} &`]: {
      borderColor: vars.colors.coral,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      marginRight: pxToVw(6, MOBILE_LARGE_BREAKPOINT),
      selectors: {
        [`input[type='checkbox'] + &`]: {
          borderRadius: pxToVw(5, MOBILE_LARGE_BREAKPOINT),
        },
      },
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      marginRight: pxToVw(6, TABLET_BREAKPOINT),
      selectors: {
        [`input[type='checkbox'] + &`]: {
          borderRadius: pxToVw(5, TABLET_BREAKPOINT),
        },
      },
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      marginRight: pxToVw(6, DESKTOP_BREAKPOINT),
      selectors: {
        [`input[type='checkbox'] + &`]: {
          borderRadius: pxToVw(5, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});

export const inputLabel = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignSelf: 'flex-start',
  fontSize: pxToVw(14),
  fontWeight: 400,
  color: vars.colors.charcoal,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  selectors: {
    [`${inputToggle()}:has(input:disabled) &`]: {
      color: vars.colors.lightCharcoal,
    },
    [`${inputToggle({ status: 'error' }).split(' ').at(-1)} &`]: {
      color: vars.colors.coral,
    },
    [`${inputToggle({ direction: 'column' })} & ~ &`]: {
      marginTop: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
    },

    [`&:not(:has(${inputIcon})):has(input:checked)`]: {
      borderColor: vars.colors.mint,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      left: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      selectors: {
        [`${inputToggle({ direction: 'column' })} & ~ &`]: {
          marginTop: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
        },
      },
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      left: pxToVw(8, TABLET_BREAKPOINT),
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      selectors: {
        [`${inputToggle({ direction: 'column' })} & ~ &`]: {
          marginTop: pxToVw(8, TABLET_BREAKPOINT),
        },
      },
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      left: pxToVw(8, DESKTOP_BREAKPOINT),
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      selectors: {
        [`${inputToggle({ direction: 'column' })} & ~ &`]: {
          marginTop: pxToVw(8, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});

export const inputHelper = style({
  display: 'flex',
  width: '100%',
  flexShrink: 0,
  color: vars.colors.lightCharcoal,
  fontSize: pxToVw(12),
  paddingLeft: pxToVw(24),
  marginTop: pxToVw(4),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
      paddingLeft: pxToVw(26, MOBILE_LARGE_BREAKPOINT),
      marginTop: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, TABLET_BREAKPOINT),
      paddingLeft: pxToVw(26, TABLET_BREAKPOINT),
      marginTop: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
      paddingLeft: pxToVw(26, DESKTOP_BREAKPOINT),
      marginTop: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
  selectors: {
    [`${inputToggle()}:has(input:disabled) &`]: {
      color: vars.colors.lightCharcoal,
    },
    [`${inputToggle({ status: 'error' }).split(' ').at(-1)} &`]: {
      color: vars.colors.coral,
    },
    [`${inputToggle({ status: 'error' }).split(' ').at(-1)} &:before`]: {
      display: 'inline-flex',
      content: '!',
      alignItems: 'center',
      justifyContent: 'center',
      width: pxToVw(14),
      height: pxToVw(14),
      marginRight: pxToVw(4),
      border: `1px solid ${vars.colors.coral}`,
      borderRadius: '50%',
      '@media': {
        [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
          width: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
          height: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
          marginRight: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
        },
        [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
          width: pxToVw(14, TABLET_BREAKPOINT),
          height: pxToVw(14, TABLET_BREAKPOINT),
          marginRight: pxToVw(4, TABLET_BREAKPOINT),
        },
        [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
          width: pxToVw(14, DESKTOP_BREAKPOINT),
          height: pxToVw(14, DESKTOP_BREAKPOINT),
          marginRight: pxToVw(4, DESKTOP_BREAKPOINT),
        },
      },
    },
  },
});

export type InputToggleVariants = RecipeVariants<typeof inputToggle>;
