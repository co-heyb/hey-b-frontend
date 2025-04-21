import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const thumbnailWrapStyle = style({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  alignSelf: 'flex-start',
  width: '100%',
  backgroundColor: vars.colors.background,
  overflow: 'hidden',
  selectors: {
    [`&::before`]: {
      content: '',
      position: 'relative',
      display: 'inline-block',
      paddingTop: '100%',
    },
  },
});

export const thumbnailStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const thumbnailImageStyle = style({
  display: 'inline-block',
  // maxWidth: '100%',
  // maxHeight: '100%',
  // objectFit: 'contain',
  objectFit: 'cover',
  height: '100%',
});

export const thumbnailLabelStyle = style({
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: pxToVw(4),
  maxWidth: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});
