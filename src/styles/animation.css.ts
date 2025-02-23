import { keyframes } from '@vanilla-extract/css';

export const bounce = keyframes({
  '0%': {
    transform: 'translateX(0px)',
    WebkitAnimationTimingFunction: 'ease-in',
  },
  '37%': {
    transform: 'translateX(5px)',
    WebkitAnimationTimingFunction: 'ease-out',
  },
  '55%': {
    transform: 'translateX(-5px)',
    WebkitAnimationTimingFunction: 'ease-in',
  },
  '73%': {
    transform: 'translateX(4px)',
    WebkitAnimationTimingFunction: 'ease-out',
  },
  '82%': {
    transform: 'translateX(-4px)',
    WebkitAnimationTimingFunction: 'ease-in',
  },
  '91%': {
    transform: 'translateX(2px)',
    WebkitAnimationTimingFunction: 'ease-out',
  },
  '96%': {
    transform: 'translateX(-2px)',
    WebkitAnimationTimingFunction: 'ease-in',
  },
  '100%': {
    transform: 'translateX(0px)',
    WebkitAnimationTimingFunction: 'ease-in',
  },
});
