import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css'; // ✅ 테마 변수 적용 가능
import { pxToVw } from '@/styles/px-to-vw.css';

export const editorWrapper = style({
  border: `1px solid ${vars.colors.lightCharcoal}`,
  borderRadius: pxToVw(8),
  padding: pxToVw(8),
  minHeight: pxToVw(300),
  fontSize: pxToVw(14),
  background: vars.colors.white,
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
  transition: 'border-color 0.2s ease-in-out',
  selectors: {
    '&:focus-within': {
      borderColor: vars.colors.mint,
    },
  },
});

/* ✅ 툴바 스타일 */
export const toolbar = style({
  display: 'flex',
  gap: pxToVw(4),
  padding: pxToVw(4),
  background: vars.colors.white,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
  borderRadius: pxToVw(4),
  border: `1px solid ${vars.colors.lightCharcoal}`,
});

export const heading1 = style({
  fontSize: pxToVw(24),
  fontWeight: 'bold',
  marginBottom: pxToVw(8),
});

export const heading2 = style({
  fontSize: pxToVw(20),
  fontWeight: 'bold',
  marginBottom: pxToVw(6),
});

export const paragraph = style({
  marginBottom: pxToVw(10),
});

export const list = style({
  paddingLeft: pxToVw(20),
});

export const blockquote = style({
  borderLeft: `4px solid ${vars.colors.charcoal}`,
  paddingLeft: pxToVw(12),
  fontStyle: 'italic',
  background: vars.colors.lightYellow,
  padding: pxToVw(8),
  borderRadius: pxToVw(4),
});

export const codeBlock = style({
  background: '#f5f5f5',
  padding: pxToVw(10),
  borderRadius: pxToVw(4),
  fontFamily: 'monospace',
});

export const icon = style({
  fontSize: pxToVw(10),
  color: vars.colors.charcoal,
});
