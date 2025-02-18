import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: pxToVw(50),
  padding: pxToVw(16),
});

export const logo = style({
  width: pxToVw(45),
  height: pxToVw(28),
  backgroundImage: "url('/images/logo.svg?v=1.0.0')",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export const headerHidden = style({
  position: 'absolute',
  clip: 'rect(0 0 0 0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
});

export const headerIcons = style({
  display: 'flex',
  gap: pxToVw(8),
});
