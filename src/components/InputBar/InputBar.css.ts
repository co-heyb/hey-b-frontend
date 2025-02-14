import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
export const inputBar = style({
  position: 'relative',
  selectors: {
    ['& + & ']: {
      marginTop: pxToVw(12),
    },
  },
});
const inputBase = style({
  width: '100%',
  boxSizing: 'border-box',
  fontSize: pxToVw(16),
  color: vars.colors.darkCharcoal,
  backgroundColor: 'transparent',
  border: 'none',
  fontWeight: 600,
  boxShadow: 'none',
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
      fontSize: pxToVw(16),
      color: vars.colors.lightCharcoal,
    },
    ['&:active, &:focus, &:-webkit-autofill']: {
      outline: 'none',
      borderColor: `${vars.colors.charcoal} !important`,
    },

    ['&:disabled, &:read-only']: {
      backgroundColor: `${vars.colors.lightCharcoal} !important`,
      color: `${vars.colors.darkCharcoal} !important`,
    },

    ['&.error']: {
      borderColor: vars.colors.coral,
    },
  },
});

export const input = style([
  inputBase,
  {
    // height: pxToVw(56),
    // marginTop: pxToVw(4),
    padding: pxToVw([10, 0]),
    // borderRadius: pxToVw(8),
    // border: `1px solid ${vars.colors.charcoal}`,
    borderBottom: `1px solid ${vars.colors.lightCharcoal}`,
    color: vars.colors.darkCharcoal,
    font: 'inherit',
  },
]);

export const inputLabel = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: pxToVw(10),
  fontSize: pxToVw(16),
  fontWeight: 600,
  color: vars.colors.charcoal,
  transition: '0.3s',
  selectors: {
    [`${inputBar}:has(input:disabled) &, ${inputBar}:has(input:read-only) &`]: {
      color: vars.colors.lightCharcoal,
    },
    [`${inputBar}:has(input:focus) &, ${inputBar}:has(input:not(:placeholder-shown)) &`]: {
      fontSize: pxToVw(14),
      transform: `translateY(${pxToVw(-14)})`,
    },
  },
});

export const inputHelper = style({
  fontSize: pxToVw(14),
  color: vars.colors.charcoal,
  selectors: {
    [`${inputBar}:has(input:disabled) &,${inputBar}:has(input:disabled) &, ${inputBar}:has(input:read-only) &`]: {
      color: vars.colors.lightCharcoal,
    },
    ['&.error']: {
      color: vars.colors.coral,
    },
  },
});
