import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const iconVariants = {
  size: {
    small: { width: pxToVw(16), height: pxToVw(16) },
    medium: {
      width: pxToVw(24),
      height: pxToVw(24),
    },
    large: { width: pxToVw(30), height: pxToVw(30) },
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

export const icon = style({});
export const iconSize = styleVariants({
  ...iconVariants.size,
});
export const iconActive = styleVariants({
  ...iconVariants.active,
});
