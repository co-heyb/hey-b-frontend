'use client';
import { componentPropsType } from '@/types';
import { baseContentPreviewTitleStyle, contentPreviewTitleStyle } from '../../ContentPreview.css';
import { useContentPreviewWrapContext } from '../../ContentPreviewWrap';

const ContentPreviewTitle = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  const { variant } = useContentPreviewWrapContext();
  return (
    <p className={`${baseContentPreviewTitleStyle} ${contentPreviewTitleStyle[variant]}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewTitle };
