import { style } from '@vanilla-extract/css';
import { pxToVw } from '@/styles/px-to-vw.css';
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
  border: '1px solid #ddd',
  cursor: 'pointer',
});

export const colorButton = style({
  width: pxToVw(32),
  height: pxToVw(32),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '1px solid #ddd',
  cursor: 'pointer',
  fontSize: pxToVw(16),
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
});
