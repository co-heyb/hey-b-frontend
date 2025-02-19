import React, { PropsWithChildren } from 'react';
import { userProfileDesc, userProfileDescBase } from './UserProfile.css';
import { UserProfileProps } from '.';

export const UserProfileDesc = ({ children, type = 'list', ...props }: PropsWithChildren<UserProfileProps>) => {
  return (
    <span className={`${userProfileDescBase} ${userProfileDesc[type]}`} {...props}>
      {children}
    </span>
  );
};
