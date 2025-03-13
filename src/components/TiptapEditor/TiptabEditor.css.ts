import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';

export const editorWrapper = style({
  overflow: 'hidden',
  width: '100%',
  padding: pxToVw(16),
  borderRadius: pxToVw(8),
});

export const toolbar = style({
  display: 'flex',
  width: '100%',
  gap: pxToVw(4),
  padding: pxToVw(4),
  background: vars.colors.white,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
  borderRadius: pxToVw(4),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderBottom: 0,
});

export const editorLoading = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: pxToVw(300),
  padding: pxToVw(8),
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderRadius: pxToVw(8),
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
});

export const spinner = style({
  width: pxToVw(24),
  height: pxToVw(24),
  border: '3px solid rgba(0, 0, 0, 0.2)',
  borderTop: `3px solid ${vars.colors.mint}`,
  borderRadius: '50%',
  animation: `${keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  })} 0.7s linear infinite`,
});
