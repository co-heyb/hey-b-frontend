import { PropsWithChildren } from 'react';
import { contentPreviewActionsStyle } from '../../ContentPreview.css';
// import { useContentPreviewWrapContext } from '../ContentPreviewWrap';

const ContentPreviewActions = ({ children }: PropsWithChildren) => {
  // const { variant } = useContentPreviewWrapContext();
  return <div className={contentPreviewActionsStyle}>{children}</div>;
};
export { ContentPreviewActions };
