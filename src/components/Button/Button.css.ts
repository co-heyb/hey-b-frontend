import { theme, vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { hexToRgb } from '@/styles/hexToRgb.css';

const buttonBase = {
  border: `1px solid transparent`,
  borderRadius: pxToVw(6),
  padding: pxToVw(vars.spacing.small),
  fontWeight: 'bold',
};

const buttonVariants = {
  size: {
    extraSmall: { padding: pxToVw([4, 8]), fontSize: pxToVw(10) },
    small: { padding: pxToVw([6, 12]), fontSize: pxToVw(12) },
    medium: { padding: pxToVw([8, 16]), borderRadius: pxToVw(8), fontSize: pxToVw(14) },
    large: { padding: pxToVw([10, 22]), borderRadius: pxToVw(10), fontSize: pxToVw(16) },
    extraLarge: { padding: pxToVw([12, 22]), borderRadius: pxToVw(10), fontSize: pxToVw(18) },
  },
  radius: {
    rect: {
      borderRadius: 0,
    },
    circle: {
      borderRadius: 9999,
    },
  },
  style: {
    filled: {
      background: vars.colors.darkCharcoal,
      color: vars.colors.white,

      ['&:hover, &:active, &:focus']: {
        background: vars.colors.charcoal,
      },

      ['&:disabled']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.3)`,
        backgroundColor: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.04)`,
      },
    },
    outline: {
      background: vars.colors.white,
      borderColor: vars.colors.darkCharcoal,
      color: vars.colors.darkCharcoal,

      ['&:hover, &:active, &:focus']: {
        color: vars.colors.charcoal,
        borderColor: vars.colors.charcoal,
      },

      ['&:disabled']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.3)`,
        borderColor: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.1)`,
      },
    },
    plane: {
      background: vars.colors.white,
      color: vars.colors.charcoal,
      padding: 0,

      ['&:hover, &:active, &:focus']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.5)`,
      },

      ['&:disabled']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.3)`,
      },
    },
    underline: {
      background: vars.colors.white,
      color: vars.colors.darkCharcoal,
      textDecoration: 'underline',
      padding: 0,

      ['&:hover, &:active, &:focus']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.5)`,
      },

      ['&:disabled']: {
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.3)`,
      },
    },
  },
  // with filled
  colorFill: {
    mint: {
      background: vars.colors.mint,
      color: vars.colors.darkCharcoal,
      ['&:hover, &:active, &:focus']: {
        background: `rgba(${hexToRgb(theme.colors.mint)}, 0.8)`,
        color: `rgba(${hexToRgb(theme.colors.darkCharcoal)}, 0.8)`,
      },
    },
    coral: {
      background: vars.colors.coral,
      color: vars.colors.white,
      ['&:hover, &:active, &:focus']: {
        color: vars.colors.white,
        background: `rgba(${hexToRgb(theme.colors.coral)}, 0.8)`,
      },
    },
  },
};
export const button = recipe({
  base: {
    ...buttonBase,
  },
  variants: { ...buttonVariants },
  defaultVariants: {
    style: 'filled',
    size: 'small',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
