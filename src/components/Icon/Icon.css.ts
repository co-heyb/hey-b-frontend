import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const IconVariants = {
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

export const Icon = style({});
export const IconSize = styleVariants({
  ...IconVariants.size,
});
export const IconActive = styleVariants({
  ...IconVariants.active,
});
