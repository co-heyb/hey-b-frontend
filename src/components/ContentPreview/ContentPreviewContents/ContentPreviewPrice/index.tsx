import { PropsWithChildren } from 'react';
import { baseContentPreviewPriceStyle, contentPreviewPriceStyle } from '../../ContentPreview.css';
import { useContentPreviewWrapContext } from '../../ContentPreviewWrap';
import { ContentPreviewPriceSale } from './ContentPreviewPriceSale';

const ContentPreviewPrice = ({ children, ...props }: PropsWithChildren) => {
  const { variant } = useContentPreviewWrapContext();
  return (
    <span className={`${baseContentPreviewPriceStyle} ${contentPreviewPriceStyle[variant]}`} {...props}>
      {children}
    </span>
  );
};
ContentPreviewPrice.Sale = ContentPreviewPriceSale;

export { ContentPreviewPrice };
