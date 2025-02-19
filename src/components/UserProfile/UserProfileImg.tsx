import { PropsWithChildren } from 'react';
import { userProfileImg, userProfileImgBase } from './UserProfile.css';
import Image, { ImageProps } from 'next/image';
import { userType } from '@/types';
import { UserProfileProps } from '.';

export const UserProfileImg = ({
  src,
  alt,
  type = 'list',
  ...props
}: PropsWithChildren<ImageProps & UserProfileProps>) => {
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
