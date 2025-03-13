import { globalStyle } from '@vanilla-extract/css';
import { pxToVw } from './px-to-vw.css';
import { vars } from './theme.css';

globalStyle('*:focus-visible ', {
  outline: `1px auto ${vars.colors.mint}`,
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
});

globalStyle('.ProseMirror ul, .ProseMirror ol', {
  padding: pxToVw([0, 14]),
});

globalStyle('::marker', {
  fontSize: pxToVw(10),
});

globalStyle('#tippy-1', {
  zIndex: `1 !important`,
});

globalStyle('h1', {
  fontSize: pxToVw(24),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
});

globalStyle('h2', {
  fontSize: pxToVw(22),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
});

globalStyle('h3', {
  fontSize: pxToVw(18),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
});

globalStyle('h4', {
  fontSize: pxToVw(16),
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
});

globalStyle('h5', {
  fontSize: pxToVw(14),
  fontWeight: 'bold',
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
});

globalStyle('p', {
  fontSize: pxToVw(12),
  fontWeight: '500',
  lineHeight: '1.6',
  letterSpacing: '0em',
});

globalStyle('blockquote', {
  position: 'relative',
  fontSize: pxToVw(14),
  fontStyle: 'italic',
  borderLeft: `${pxToVw(3)} solid ${vars.colors.mint}`,
  backgroundColor: 'rgba(163, 218, 209, 0.1)',
  padding: pxToVw([8, 12]),
  margin: pxToVw([12, 0]),
});

globalStyle('.messageContainer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  gap: pxToVw(28),
  padding: pxToVw([40, 16]),
});
