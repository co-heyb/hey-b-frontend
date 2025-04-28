import { componentPropsType } from '@/types';
import { baseContentPreviewPriceStyle, contentPreviewPriceStyle } from '../../ContentPreview.css';
import { ContentPreviewPriceSale } from './ContentPreviewPriceSale';
import { ContentPreviewProps } from '../..';

const ContentPreviewPrice = ({
  children,
  variant = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewProps>) => {
  // const { variant } = useContentPreviewWrapContext();
  return (
    <span className={`${baseContentPreviewPriceStyle} ${contentPreviewPriceStyle}`} {...props}>
      {children}
    </span>
  );
};
ContentPreviewPrice.Sale = ContentPreviewPriceSale;

export { ContentPreviewPrice };
