import { style } from '@vanilla-extract/css';
import { userProfileBase } from '../UserProfile/UserProfile.css';
import { pxToVw } from '@/styles/px-to-vw.css';

export const comment = style({
  selectors: {
    [`${userProfileBase} &`]: {
      paddingLeft: pxToVw(40),
    },
  },
});
