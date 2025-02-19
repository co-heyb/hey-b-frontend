import { vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { hexToRgb } from '@/styles/hexToRgb.css';

const buttonBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: pxToVw(4),
  border: `1px solid transparent`,
  borderRadius: pxToVw(6),
  padding: pxToVw(8),
  fontWeight: 600,
};

const buttonVariants = {
  size: {
    extraSmall: { padding: pxToVw([4, 8]), fontSize: pxToVw(10) },
    small: { padding: pxToVw([6, 12]), fontSize: pxToVw(12) },
    medium: { padding: pxToVw([8, 16]), borderRadius: pxToVw(8), fontSize: pxToVw(14) },
    large: { padding: pxToVw([10, 22]), borderRadius: pxToVw(10), fontSize: pxToVw(16) },
    extraLarge: { padding: pxToVw([12, 22]), borderRadius: pxToVw(10), fontSize: pxToVw(18) },
  },
  wide: { true: { width: '100%', flexShrink: 0 } },
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
    plane: {
      background: vars.colors.white,
      color: vars.colors.charcoal,
      padding: 0,

      ['&:disabled']: {
        color: `rgba(${hexToRgb(vars.colors.darkCharcoal)}, 0.3)`,
      },
    },
    underline: {
      background: vars.colors.white,
      color: vars.colors.darkCharcoal,
      textDecoration: 'underline',
      padding: 0,

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
    style: 'filled',
    size: 'small',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
