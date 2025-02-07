import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const IconVariants = {
  size: {
    small: { width: pxToVw(16), height: pxToVw(16) },
    medium: {
      width: pxToVw(24),
      height: pxToVw(24),
    },
    large: {},
  },
  active: {
    true: {
      filter: vars.colorFilter.blackToActiveMint,
    },
    coral: {
      filter: vars.colorFilter.blackToCoral,
    },
    false: {
      filter: vars.colorFilter.blackToDarkCharcoal,
    },
  },
};
export const Icon = recipe({
  base: {
    selectors: {
      ['a:hover &, a:active &, a:focus &,button:hover &, button:active &, button:focus &']: {
        filter: vars.colorFilter.blackToMint,
      },
    },
  },
  variants: IconVariants,
  defaultVariants: {
    size: 'medium',
    active: false,
  },
});
export type IconVariants = RecipeVariants<typeof Icon>;
