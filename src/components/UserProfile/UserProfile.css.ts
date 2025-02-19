import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';

export const userProfileBase = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const userProfile = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileImgBase = style({ borderRadius: '50%', border: `1px solid ${vars.colors.charcoal}` });
export const userProfileImg = styleVariants({
  list: { width: pxToVw(30), height: pxToVw(30) },
  detail: { width: pxToVw(24), height: pxToVw(24) },
  comment: { width: pxToVw(20), height: pxToVw(20) },
  profile: { width: pxToVw(50), height: pxToVw(50) },
});

export const userProfileNameBase = style({
  display: 'flex',
  fontWeight: 500,
  selectors: {
    [`${userProfileImgBase} + &`]: {
      marginLeft: pxToVw(10),
    },
  },
});

export const userProfileName = styleVariants({
  list: { fontSize: pxToVw(18) },
  detail: { fontSize: pxToVw(14) },
  comment: { fontSize: pxToVw(12) },
  profile: { fontSize: pxToVw(18) },
});

export const userProfileDescBase = style({
  fontWeight: 500,
  fontSize: pxToVw(12),
  color: vars.colors.charcoal,
});

export const userProfileDesc = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileFollowBtnBase = style({
  selectors: {
    [`${userProfileImgBase} + &`]: {
      marginTop: pxToVw(20),
    },
  },
});
export const userProfileFollowBtn = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: {},
});

export const userProfileWrapBase = style({ display: 'flex', alignItems: 'center' });
export const userProfileWrap = styleVariants({
  list: {},
  detail: {},
  comment: {},
  profile: { flexDirection: 'column', alignItems: 'flex-start' },
});
