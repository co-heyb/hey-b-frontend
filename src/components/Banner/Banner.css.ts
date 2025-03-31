import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { style } from '@vanilla-extract/css';

export const bannerContainer = style({
  display: 'flex',
  overflow: 'hidden',
  width: '100%',
  maxHeight: '640px',
  backgroundColor: '#FFD8A3',
  margin: '0 auto',
  justifyContent: 'center',
});

export const banner = style({
  display: 'flex',
  width: 'auto',
  maxWidth: 'calc(100% + 20px)',
});
