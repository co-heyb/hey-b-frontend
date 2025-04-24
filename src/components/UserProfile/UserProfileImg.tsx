import { userProfileImg, userProfileImgBase } from './UserProfile.css';
import Image, { ImageProps } from 'next/image';
import { componentPropsType } from '@/types';
import { UserProfileProps } from '.';

export const UserProfileImg = ({
  src,
  alt,
  type = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ImageProps & UserProfileProps>) => {
  return (
    <Image
      className={`${userProfileImgBase} ${userProfileImg[type]}`}
      src={src}
      alt={alt}
      width={30}
      height={30}
      {...props}
    />
  );
};
