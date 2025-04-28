import { componentPropsType } from '@/types';
import { baseContentPreviewTitleStyle, contentPreviewTitleStyle } from '../../ContentPreview.css';
import { ContentPreviewProps } from '../..';

const ContentPreviewTitle = ({
  children,
  variant = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewProps>) => {
  return (
    <p className={`${baseContentPreviewTitleStyle} ${contentPreviewTitleStyle}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewTitle };
