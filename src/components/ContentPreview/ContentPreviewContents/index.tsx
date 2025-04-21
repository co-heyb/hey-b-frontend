import { HTMLAttributes, PropsWithChildren } from 'react';
import { contentPreviewContentsStyle } from '../ContentPreview.css';
import { useContentPreviewWrapContext } from '../ContentPreviewWrap';

const ContentPreviewContents = ({ children, ...props }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useContentPreviewWrapContext();

  return (
    <div className={variant === 'list' ? contentPreviewContentsStyle : ''} {...props}>
      {children}
    </div>
  );
};

export default ContentPreviewContents;
