'use client';

import { HTMLAttributes } from 'react';
import { contentPreviewContentsStyle } from '../ContentPreview.css';
import { useContentPreviewWrapContext } from '../ContentPreviewWrap';
import { componentPropsType } from '@/types';

const ContentPreviewContents = ({
  children,
  ...props
}: componentPropsType.ComponentBaseProps<HTMLAttributes<HTMLDivElement>>) => {
  const { variant } = useContentPreviewWrapContext();

  return (
    <div className={variant === 'list' ? contentPreviewContentsStyle : ''} {...props}>
      {children}
    </div>
  );
};

export default ContentPreviewContents;
