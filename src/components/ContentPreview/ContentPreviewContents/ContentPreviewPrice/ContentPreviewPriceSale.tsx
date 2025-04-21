import { PropsWithChildren } from 'react';
import { contentPreviewPriceSaleStyle } from '../../ContentPreview.css';

const ContentPreviewPriceSale = ({ children, ...props }: PropsWithChildren) => {
  return (
    <span className={contentPreviewPriceSaleStyle} {...props}>
      {children}
    </span>
  );
};
export { ContentPreviewPriceSale };
