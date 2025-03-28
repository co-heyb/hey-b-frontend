import { style } from '@vanilla-extract/css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';

export const colorPickerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: pxToVw(8),
});

export const colorSwatch = style({
  width: pxToVw(24),
  height: pxToVw(24),
  borderRadius: '50%',
  border: `1px solid ${vars.colors.lightCharcoal}`,
  cursor: 'pointer',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(24, TABLET_BREAKPOINT),
      height: pxToVw(24, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(24, DESKTOP_BREAKPOINT),
      height: pxToVw(24, DESKTOP_BREAKPOINT),
    },
  },
});

export const colorButton = style({
  width: pxToVw(32),
  height: pxToVw(32),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: `1px solid ${vars.colors.lightCharcoal}`,
  cursor: 'pointer',
  fontSize: pxToVw(16),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(32, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(32, MOBILE_LARGE_BREAKPOINT),
      fontSize: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(32, TABLET_BREAKPOINT),
      height: pxToVw(32, TABLET_BREAKPOINT),
      fontSize: pxToVw(16, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(32, DESKTOP_BREAKPOINT),
      height: pxToVw(32, DESKTOP_BREAKPOINT),
      fontSize: pxToVw(16, DESKTOP_BREAKPOINT),
    },
  },
});

export const colorPickerPopup = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: vars.colors.white,
  borderRadius: pxToVw(8),
  boxShadow: `0px ${pxToVw(4)} ${pxToVw(10)} rgba(0, 0, 0, 0.1)`,
  zIndex: 10,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      borderRadius: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, MOBILE_LARGE_BREAKPOINT)} ${pxToVw(10, MOBILE_LARGE_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      borderRadius: pxToVw(8, TABLET_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, TABLET_BREAKPOINT)} ${pxToVw(10, TABLET_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      borderRadius: pxToVw(8, DESKTOP_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, DESKTOP_BREAKPOINT)} ${pxToVw(10, DESKTOP_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
  },
});
