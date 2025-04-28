import { baseContentPreviewDescStyle, contentPreviewDescStyle } from '../../ContentPreview.css';
import { componentPropsType } from '@/types';
import { ContentPreviewProps } from '../..';

const ContentPreviewDesc = ({
  children,
  variant = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewProps>) => {
  // const { variant } = useContentPreviewWrapContext();

  return (
    <p className={`${baseContentPreviewDescStyle} ${contentPreviewDescStyle}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewDesc };
