import { DESKTOP_BREAKPOINT, MOBILE_LARGE_BREAKPOINT, pxToVw, TABLET_BREAKPOINT } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const NoDataSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  gap: pxToVw(28),
  padding: pxToVw([40, 16]),
  '@media': {
    [`(min-width: ${MOBILE_LARGE_BREAKPOINT}px)`]: {
      padding: pxToVw([40, 16], MOBILE_LARGE_BREAKPOINT),
      gap: pxToVw(28, MOBILE_LARGE_BREAKPOINT),
    },
    [`(min-width: ${TABLET_BREAKPOINT}px)`]: {
      padding: pxToVw([40, 16], TABLET_BREAKPOINT),
      gap: pxToVw(28, TABLET_BREAKPOINT),
    },
    [`(min-width: ${DESKTOP_BREAKPOINT}px)`]: {
      padding: pxToVw([40, 16], DESKTOP_BREAKPOINT),
      gap: pxToVw(28, DESKTOP_BREAKPOINT),
    },
  },
});
