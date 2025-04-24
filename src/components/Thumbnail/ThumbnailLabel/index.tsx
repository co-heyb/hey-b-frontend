import { thumbnailLabelStyle } from '../Thumbnail.css';
import { componentPropsType } from '@/types';

const ThumbnailLabel = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return <span className={thumbnailLabelStyle} {...props}></span>;
};

export default ThumbnailLabel;
