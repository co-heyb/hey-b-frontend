import React, { PropsWithChildren } from 'react';
import { userProfileWrapBase, userProfileWrap } from './UserProfile.css';
import { userType } from '@/types';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
import { UserProfileProps } from '.';

export const UserProfileWrap = ({ children, type = 'list', ...props }: PropsWithChildren<UserProfileProps>) => {
  return (
    <span className={`${userProfileWrapBase} ${userProfileWrap[type]}`} {...props}>
      {setChildrenWithProps(children, { type })}
    </span>
  );
};
