import React, { PropsWithChildren } from 'react';
import { userProfileName, userProfileNameBase } from './UserProfile.css';
import { UserProfileProps } from '.';

export const UserProfileName = ({ children, type = 'list', ...props }: PropsWithChildren<UserProfileProps>) => {
  return (
    <span className={`${userProfileNameBase} ${userProfileName[type]}`} {...props}>
      {children}
    </span>
  );
};
