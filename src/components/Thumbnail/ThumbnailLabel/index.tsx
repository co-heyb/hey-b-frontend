import { PropsWithChildren } from 'react';
import { thumbnailLabelStyle } from '../Thumbnail.css';

const ThumbnailLabel = ({ children, ...props }: PropsWithChildren) => {
  return <span className={thumbnailLabelStyle} {...props}></span>;
};

export default ThumbnailLabel;
