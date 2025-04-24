'use client';

import { componentPropsType } from '@/types';
import { contentPreviewPriceSaleStyle } from '../../ContentPreview.css';

const ContentPreviewPriceSale = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <span className={contentPreviewPriceSaleStyle} {...props}>
      {children}
    </span>
  );
};
export { ContentPreviewPriceSale };
