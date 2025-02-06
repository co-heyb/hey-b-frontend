import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const tabBar = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: pxToVw(78),
  padding: pxToVw([15, 12]),
});

globalStyle(`${tabBar} li `, {
  display: 'flex',
  flex: 1,
  gap: pxToVw(8),
  height: '100%',
  fontSize: pxToVw(12),
  color: vars.colors.darkCharcoal,
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
});
globalStyle(`${tabBar} li a`, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

globalStyle(`${tabBar} li a:hover`, {
  color: vars.colors.charcoal,
});

globalStyle(`${tabBar} li a:active`, {
  color: vars.colors.mint,
});
