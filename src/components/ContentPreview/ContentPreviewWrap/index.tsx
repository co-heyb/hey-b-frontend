'use client';

import { useRef } from 'react';
import {
  baseContentPreviewWrapStyle,
  ContentPreviewStyleVariants,
  contentPreviewWrapStyle,
} from '../ContentPreview.css';
import useDragScroll from '@/hooks/useDragScroll';
import { componentPropsType } from '@/types';

export interface ContentPreviewWrapProps {
  isSlide?: boolean;
}

const ContentPreviewWrap = ({
  children,
  isSlide = false,
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewWrapProps>) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  useDragScroll(scrollRef, isSlide === true);

  return (
    <ul className={`${baseContentPreviewWrapStyle} ${contentPreviewWrapStyle}`} ref={scrollRef}>
      {children}
    </ul>
  );
};

export { ContentPreviewWrap };
