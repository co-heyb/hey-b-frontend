import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { pxToVw } from '@/styles/px-to-vw.css';

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  padding: pxToVw([20]),
});
