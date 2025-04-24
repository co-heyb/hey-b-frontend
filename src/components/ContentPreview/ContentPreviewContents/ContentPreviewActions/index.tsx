'use client';

import { componentPropsType } from '@/types';
import { contentPreviewActionsStyle } from '../../ContentPreview.css';
// import { useContentPreviewWrapContext } from '../ContentPreviewWrap';

const ContentPreviewActions = ({ children }: componentPropsType.ComponentBaseProps) => {
  // const { variant } = useContentPreviewWrapContext();
  return <div className={contentPreviewActionsStyle}>{children}</div>;
};
export { ContentPreviewActions };
