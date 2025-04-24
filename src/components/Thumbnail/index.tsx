import { thumbnailImageStyle, thumbnailStyle, thumbnailWrapStyle } from './Thumbnail.css';
import Image, { ImageProps } from 'next/image';
import ThumbnailLabel from './ThumbnailLabel';
import { componentPropsType } from '@/types';

const Thumbnail = ({ children, src, alt, ...props }: componentPropsType.ComponentBaseProps<ImageProps>) => {
  return (
    <>
      <div className={thumbnailWrapStyle} {...props}>
        <div className={thumbnailStyle} {...props}>
          {children}
          <Image className={thumbnailImageStyle} src={src} alt={alt} {...props} />
        </div>
      </div>
    </>
  );
};

Thumbnail.Label = ThumbnailLabel;
export { Thumbnail };
