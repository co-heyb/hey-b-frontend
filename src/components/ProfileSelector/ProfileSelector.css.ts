import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: pxToVw(20),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(20, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(20, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(20, DESKTOP_BREAKPOINT),
    },
  },
});

export const selectedProfileBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: pxToVw(243),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      minHeight: pxToVw(243, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      minHeight: pxToVw(243, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      minHeight: pxToVw(243, DESKTOP_BREAKPOINT),
    },
  },
});

export const mainImage = style({
  borderRadius: '50%',
  width: pxToVw(120),
  height: pxToVw(120),
  marginBottom: pxToVw(12),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(120, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(120, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(120, TABLET_BREAKPOINT),
      height: pxToVw(120, TABLET_BREAKPOINT),
      marginBottom: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(120, DESKTOP_BREAKPOINT),
      height: pxToVw(120, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

export const name = style({
  fontSize: pxToVw(18),
  fontWeight: 700,
  marginBottom: pxToVw(4),
  color: vars.colors.darkCharcoal,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, TABLET_BREAKPOINT),
      marginBottom: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});

export const description = style({
  fontSize: pxToVw(16),
  marginBottom: pxToVw(4),
  color: vars.colors.charcoal,
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(4, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, TABLET_BREAKPOINT),
      marginBottom: pxToVw(4, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(4, DESKTOP_BREAKPOINT),
    },
  },
});

export const quote = style({
  fontSize: pxToVw(13),
  fontStyle: 'italic',
  color: vars.colors.lightCharcoal,

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(13, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(13, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(13, DESKTOP_BREAKPOINT),
    },
  },
});

export const randomButton = style({
  marginTop: pxToVw(-33),
  marginBottom: pxToVw(10),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      marginTop: pxToVw(-33, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      marginTop: pxToVw(-33, TABLET_BREAKPOINT),
      marginBottom: pxToVw(10, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      marginTop: pxToVw(-33, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(10, DESKTOP_BREAKPOINT),
    },
  },
});

export const thumbnailList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: pxToVw(12),
  justifyContent: 'center',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

export const thumbnailCard = style({
  position: 'relative',
  padding: 0,
  background: 'none',
  cursor: 'pointer',
  width: pxToVw(54),
  height: pxToVw(54),
  borderRadius: '50%',
  selectors: {
    '&': {
      border: `2px solid transparent`,
    },
  },
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      width: pxToVw(65, MOBILE_LARGE_BREAKPOINT),
      height: pxToVw(65, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      width: pxToVw(65, TABLET_BREAKPOINT),
      height: pxToVw(65, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      width: pxToVw(65, DESKTOP_BREAKPOINT),
      height: pxToVw(65, DESKTOP_BREAKPOINT),
    },
  },
});

export const selected = style({
  borderColor: vars.colors.mint,
});

export const thumbnailImage = style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {},
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {},
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {},
  },
});
