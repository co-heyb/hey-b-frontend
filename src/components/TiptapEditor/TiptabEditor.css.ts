import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const editorWrapper = style({
  overflow: 'hidden',
  width: '100%',
  padding: pxToVw(16),
  borderRadius: pxToVw(8),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(16, TABLET_BREAKPOINT),
      borderRadius: pxToVw(8, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(16, DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(8, DESKTOP_BREAKPOINT),
    },
  },
});

export const toolbar = style({
  display: 'flex',
  width: '100%',
  gap: pxToVw(4),
  padding: pxToVw(4),
  background: vars.colors.white,
  boxShadow: `0px ${pxToVw(4)} ${pxToVw(12)} rgba(0, 0, 0, 0.15)`,
  borderRadius: pxToVw(4),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderBottom: 0,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, MOBILE_LARGE_BREAKPOINT)} ${pxToVw(12, MOBILE_LARGE_BREAKPOINT)} rgba(0, 0, 0, 0.15)`,
      borderRadius: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(4, TABLET_BREAKPOINT),
      padding: pxToVw(4, TABLET_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, TABLET_BREAKPOINT)} ${pxToVw(12, TABLET_BREAKPOINT)} rgba(0, 0, 0, 0.15)`,
      borderRadius: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(4, DESKTOP_BREAKPOINT),
      padding: pxToVw(4, DESKTOP_BREAKPOINT),
      boxShadow: `0px ${pxToVw(4, DESKTOP_BREAKPOINT)} ${pxToVw(12, DESKTOP_BREAKPOINT)} rgba(0, 0, 0, 0.15)`,
      borderRadius: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});

export const editorLoading = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: pxToVw(300),
  padding: pxToVw(8),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderRadius: pxToVw(8),
  boxShadow: `0 ${pxToVw(2)} ${pxToVw(10)} rgba(0, 0, 0, 0.1)`,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      minHeight: pxToVw(300, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
      borderRadius: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
      boxShadow: `0 ${pxToVw(2, MOBILE_LARGE_BREAKPOINT)} ${pxToVw(10, MOBILE_LARGE_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      minHeight: pxToVw(300, TABLET_BREAKPOINT),
      padding: pxToVw(8, TABLET_BREAKPOINT),
      borderRadius: pxToVw(8, TABLET_BREAKPOINT),
      boxShadow: `0 ${pxToVw(2, TABLET_BREAKPOINT)} ${pxToVw(10, TABLET_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      minHeight: pxToVw(300, DESKTOP_BREAKPOINT),
      padding: pxToVw(8, DESKTOP_BREAKPOINT),
      borderRadius: pxToVw(8, DESKTOP_BREAKPOINT),
      boxShadow: `0 ${pxToVw(2, DESKTOP_BREAKPOINT)} ${pxToVw(10, DESKTOP_BREAKPOINT)} rgba(0, 0, 0, 0.1)`,
    },
  },
});

export const spinner = style({
  width: pxToVw(24),
  height: pxToVw(24),
  border: `${pxToVw(3)} solid rgba(0, 0, 0, 0.2)`,
  borderTop: `${pxToVw(3)} solid ${vars.colors.mint}`,
  borderRadius: '50%',
  animation: `${keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  })} 0.7s linear infinite`,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
      border: `${pxToVw(3, MOBILE_LARGE_BREAKPOINT)} solid rgba(0, 0, 0, 0.2)`,
      borderTop: `${pxToVw(3, MOBILE_LARGE_BREAKPOINT)} solid ${vars.colors.mint}`,
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(24, TABLET_BREAKPOINT),
      height: pxToVw(24, TABLET_BREAKPOINT),
      border: `${pxToVw(3, TABLET_BREAKPOINT)} solid rgba(0, 0, 0, 0.2)`,
      borderTop: `${pxToVw(3, TABLET_BREAKPOINT)} solid ${vars.colors.mint}`,
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(24, TABLET_BREAKPOINT),
      height: pxToVw(24, TABLET_BREAKPOINT),
      border: `${pxToVw(3, TABLET_BREAKPOINT)} solid rgba(0, 0, 0, 0.2)`,
      borderTop: `${pxToVw(3, TABLET_BREAKPOINT)} solid ${vars.colors.mint}`,
    },
  },
});
