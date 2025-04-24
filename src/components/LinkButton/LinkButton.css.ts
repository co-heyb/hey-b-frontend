import { buttonBase, buttonVariants } from '@/components/Button/Button.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const linkButton = recipe({
  base: {
    ...buttonBase,
    // textDecoration: 'none',
  },
  variants: {
    ...buttonVariants,
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    variant: 'plain',
    size: 'small',
  },
});
export type LinkButtonVariants = RecipeVariants<typeof linkButton>;
