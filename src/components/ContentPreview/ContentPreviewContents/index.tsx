import { HTMLAttributes } from 'react';
import { contentPreviewContentsStyle } from '../ContentPreview.css';
// import { useContentPreviewWrapContext } from '../ContentPreviewWrap';
import { componentPropsType } from '@/types';
import { ContentPreviewProps } from '..';

const ContentPreviewContents = ({
  children,
  variant = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewProps & HTMLAttributes<HTMLDivElement>>) => {
  // const { variant } = useContentPreviewWrapContext();

  return (
    <div className={variant === 'list' ? contentPreviewContentsStyle : ''} {...props}>
      {children}
    </div>
  );
};

export default ContentPreviewContents;
