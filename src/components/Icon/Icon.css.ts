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
  colorFill: {
    darkCharcoal: {
      filter: vars.colorFilter.blackToDarkCharcoal,
    },
    mint: {
      filter: vars.colorFilter.blackToActiveMint,
    },
    coral: {
      filter: vars.colorFilter.blackToCoral,
    },
    white: {
      filter: vars.colorFilter.blackToWhite,
    },
  },
};

export const icon = style({});
export const iconSize = styleVariants({
  ...iconVariants.size,
});
export const iconColorFill = styleVariants({
  ...iconVariants.colorFill,
});
