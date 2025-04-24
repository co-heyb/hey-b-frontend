'use client';

import { useContentPreviewWrapContext } from '../../ContentPreviewWrap';
import { baseContentPreviewDescStyle, contentPreviewDescStyle } from '../../ContentPreview.css';
import { componentPropsType } from '@/types';

const ContentPreviewDesc = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  const { variant } = useContentPreviewWrapContext();

  return (
    <p className={`${baseContentPreviewDescStyle} ${contentPreviewDescStyle[variant]}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewDesc };
