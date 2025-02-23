import { bounce } from '@/styles/animation.css';
import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const inputBar = recipe({
  base: {
    position: 'relative',
    selectors: {
      ['& + & ']: {
        marginTop: pxToVw(12),
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
      disabled: {},
    },
  },
});

const inputBase = style({
  width: '100%',
  boxSizing: 'border-box',
  fontSize: pxToVw(14),
  color: vars.colors.darkCharcoal,
  backgroundColor: 'transparent',
  fontWeight: 500,
  boxShadow: 'none',
  border: 'none',
  WebkitAppearance: 'none',
  selectors: {
    // hide Safari input icon
    ['&:-webkit-contacts-auto-fill-button, &:-webkit-credentials-auto-fill-button']: {
      visibility: 'hidden',
      display: 'none !important',
      pointerEvents: 'none',
      height: 0,
      width: 0,
      margin: 0,
    },

    // hide IE input icon
    ['&:-ms-clear, &:-ms-reveal']: {
      width: 0,
      height: 0,
      display: 'none',
    },
    // hide firefox input icon
    ['&:-webkit-search-decoration, &:-webkit-search-cancel-button, &:-webkit-search-results-button, &:-webkit-search-results-decoration']:
      {
        display: 'none',
      },

    ['&:placeholder']: {
      fontSize: pxToVw(14),
      color: vars.colors.lightCharcoal,
    },
    ['&:active, &:focus, &:-webkit-autofill']: {
      outline: 'none',
    },
  },
});

export const input = style([
  inputBase,
  {
    width: '100%',
    // height: pxToVw(56),
    // marginTop: pxToVw(4),
    padding: pxToVw([14, 8, 6]),
    // borderRadius: pxToVw(8),
    // border: `1px solid ${vars.colors.charcoal}`,
    color: vars.colors.darkCharcoal,
    // font: 'inherit',
    fontSize: pxToVw(14),
  },
]);

export const inputWrap = style({
  display: 'flex',
  border: 'none',
  borderBottom: `1px solid ${vars.colors.lightCharcoal}`,
  selectors: {
    [`&:has(input:active), &:has(input:focus), &:has(input:-webkit-autofill)`]: {
      outline: 'none',
      borderColor: `${vars.colors.charcoal}`,
    },

    [`&:has(input:disabled), &:has(input:read-only)`]: {
      borderColor: vars.colors.charcoal,
      backgroundColor: `${vars.colors.lightCharcoal} !important`,
      color: `${vars.colors.darkCharcoal} !important`,
    },

    [`${inputBar({ status: 'error' }).split(' ')[1]} &`]: {
      borderColor: vars.colors.coral,
    },
  },
});

export const inputLabel = style({
  position: 'absolute',
  top: 0,
  left: pxToVw(8),
  display: 'flex',
  flexDirection: 'column',
  paddingTop: pxToVw(10),
  fontSize: pxToVw(14),
  fontWeight: 400,
  color: vars.colors.charcoal,
  transition: '0.3s',
  selectors: {
    [`${inputBar()}:has(input:disabled) &, ${inputBar()}:has(input:read-only) &`]: {
      color: vars.colors.charcoal,
    },
    [`${inputBar()}:has(input:focus) &, ${inputBar()}:has(input:not(:placeholder-shown)) &`]: {
      fontSize: pxToVw(12),
      opacity: 0,
      transform: `translateY(${pxToVw(-14)})`,
    },
  },
});

export const inputHelper = style({
  fontSize: pxToVw(12),
  color: vars.colors.charcoal,
  marginTop: pxToVw(4),
  paddingLeft: pxToVw(8),
  selectors: {
    [`${inputBar()}:has(input:disabled) &,${inputBar()}:has(input:disabled) &, ${inputBar()}:has(input:read-only) &`]: {
      color: vars.colors.lightCharcoal,
    },
    [`${inputBar({ status: 'error' }).split(' ')[1]} &`]: {
      color: vars.colors.coral,
    },
    [`${inputBar({ status: 'error' }).split(' ')[1]} &:before`]: {
      display: 'inline-flex',
      content: '!',
      alignItems: 'center',
      justifyContent: 'center',
      width: pxToVw(14),
      height: pxToVw(14),
      marginRight: pxToVw(4),
      border: `1px solid ${vars.colors.coral}`,
      borderRadius: '50%',
    },
  },
});

export const inputButtons = style({
  display: 'flex',
  flexShrink: 0,
});

export type InputBarVariants = RecipeVariants<typeof inputBar>;
