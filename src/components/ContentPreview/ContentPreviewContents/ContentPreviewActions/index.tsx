import { componentPropsType } from '@/types';
import { contentPreviewActionsStyle } from '../../ContentPreview.css';
import { ContentPreviewProps } from '../..';
// import { useContentPreviewWrapContext } from '../ContentPreviewWrap';

const ContentPreviewActions = ({ children, variant }: componentPropsType.ComponentBaseProps<ContentPreviewProps>) => {
  // const { variant } = useContentPreviewWrapContext();
  return <div className={contentPreviewActionsStyle}>{children}</div>;
};
export { ContentPreviewActions };
