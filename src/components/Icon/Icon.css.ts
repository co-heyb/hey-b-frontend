import { pxToVw } from '@/styles/px-to-vw.css';
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
};
export const Icon = recipe({
  variants: IconVariants,
  defaultVariants: {
    size: 'medium',
  },
});
export type IconVariants = RecipeVariants<typeof Icon>;
