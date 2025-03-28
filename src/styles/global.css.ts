import { globalStyle } from '@vanilla-extract/css';
import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from './px-to-vw.css';
import { vars } from './theme.css';

globalStyle('*:focus-visible ', {
  outline: `1px auto ${vars.colors.mint}`,
});

globalStyle('.center-container', {
  width: '100%',
  margin: '0 auto',
  maxWidth: pxToVw(400),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      maxWidth: pxToVw(400, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('.ProseMirror', {
  border: `1px solid ${vars.colors.lightCharcoal}`,
  padding: pxToVw(8),
  minHeight: pxToVw(300),
  maxHeight: pxToVw(400),
  fontSize: pxToVw(14),
  background: vars.colors.white,
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
  transition: 'border-color 0.2s ease-in-out',
  overflowY: 'auto',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw(8, MOBILE_LARGE_BREAKPOINT),
      minHeight: pxToVw(300, MOBILE_LARGE_BREAKPOINT),
      maxHeight: pxToVw(400, MOBILE_LARGE_BREAKPOINT),
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw(8, TABLET_BREAKPOINT),
      minHeight: pxToVw(300, TABLET_BREAKPOINT),
      maxHeight: pxToVw(400, TABLET_BREAKPOINT),
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw(8, DESKTOP_BREAKPOINT),
      minHeight: pxToVw(300, DESKTOP_BREAKPOINT),
      maxHeight: pxToVw(400, DESKTOP_BREAKPOINT),
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('.ProseMirror ul, .ProseMirror ol', {
  padding: pxToVw([0, 14]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw([0, 14], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw([0, 14], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw([0, 14], DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('::marker', {
  fontSize: pxToVw(10),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(10, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(10, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(10, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('#tippy-1', {
  zIndex: `1 !important`,
});

globalStyle('h1', {
  fontSize: pxToVw(24),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',

  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(24, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(24, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('h2', {
  fontSize: pxToVw(22),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
  marginBottom: pxToVw(24),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(22, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(24, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(22, TABLET_BREAKPOINT),
      marginBottom: pxToVw(24, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(22, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(24, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('h3', {
  fontSize: pxToVw(18),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
  marginBottom: pxToVw(24),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(20, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, TABLET_BREAKPOINT),
      marginBottom: pxToVw(20, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(18, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(20, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('h4', {
  fontSize: pxToVw(16),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
  marginBottom: pxToVw(24),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(16, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, TABLET_BREAKPOINT),
      marginBottom: pxToVw(16, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(16, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(16, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('h5', {
  fontSize: pxToVw(14),
  fontWeight: 'bold',
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  marginBottom: pxToVw(24),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      marginBottom: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      marginBottom: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      marginBottom: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('p', {
  fontSize: pxToVw(12),
  fontWeight: '500',
  lineHeight: '1.6',
  letterSpacing: '0em',
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(12, DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('blockquote', {
  position: 'relative',
  fontSize: pxToVw(14),
  fontStyle: 'italic',
  borderLeft: `${pxToVw(3)} solid ${vars.colors.mint}`,
  backgroundColor: 'rgba(163, 218, 209, 0.1)',
  padding: pxToVw([8, 12]),
  margin: pxToVw([12, 0]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, MOBILE_LARGE_BREAKPOINT),
      borderLeft: `${pxToVw(3, MOBILE_LARGE_BREAKPOINT)} solid ${vars.colors.mint}`,
      padding: pxToVw([8, 12], MOBILE_LARGE_BREAKPOINT),
      margin: pxToVw([12, 0], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, TABLET_BREAKPOINT),
      borderLeft: `${pxToVw(3, TABLET_BREAKPOINT)} solid ${vars.colors.mint}`,
      padding: pxToVw([8, 12], TABLET_BREAKPOINT),
      margin: pxToVw([12, 0], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      fontSize: pxToVw(14, DESKTOP_BREAKPOINT),
      borderLeft: `${pxToVw(3, DESKTOP_BREAKPOINT)} solid ${vars.colors.mint}`,
      padding: pxToVw([8, 12], DESKTOP_BREAKPOINT),
      margin: pxToVw([12, 0], DESKTOP_BREAKPOINT),
    },
  },
});

globalStyle('.messageContainer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  gap: pxToVw(28),
  padding: pxToVw([40, 16]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      gap: pxToVw(28, MOBILE_LARGE_BREAKPOINT),
      padding: pxToVw([40, 16], MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      gap: pxToVw(28, TABLET_BREAKPOINT),
      padding: pxToVw([40, 16], TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      gap: pxToVw(28, DESKTOP_BREAKPOINT),
      padding: pxToVw([40, 16], DESKTOP_BREAKPOINT),
    },
  },
});
