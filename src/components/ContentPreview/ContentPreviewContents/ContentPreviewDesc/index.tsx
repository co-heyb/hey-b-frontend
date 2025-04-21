import { PropsWithChildren } from 'react';
import { useContentPreviewWrapContext } from '../../ContentPreviewWrap';
import { baseContentPreviewDescStyle, contentPreviewDescStyle } from '../../ContentPreview.css';

const ContentPreviewDesc = ({ children, ...props }: PropsWithChildren) => {
  const { variant } = useContentPreviewWrapContext();

  return (
    <p className={`${baseContentPreviewDescStyle} ${contentPreviewDescStyle[variant]}`} {...props}>
      {children}
    </p>
  );
};
export { ContentPreviewDesc };
