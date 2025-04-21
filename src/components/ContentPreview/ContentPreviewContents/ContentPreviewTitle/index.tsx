import { PropsWithChildren } from 'react';
import { baseContentPreviewTitleStyle, contentPreviewTitleStyle } from '../../ContentPreview.css';
import { useContentPreviewWrapContext } from '../../ContentPreviewWrap';

const ContentPreviewTitle = ({ children, ...props }: PropsWithChildren) => {
  const { variant } = useContentPreviewWrapContext();
  return (
    <p className={`${baseContentPreviewTitleStyle} ${contentPreviewTitleStyle[variant]}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewTitle };
