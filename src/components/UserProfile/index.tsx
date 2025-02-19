import { PropsWithChildren } from 'react';
import { userProfile, userProfileBase } from './UserProfile.css';
import { UserProfileImg } from './UserProfileImg';
import { UserProfileName } from './UserProfileName';
import { UserProfileFollowBtn } from './UserProfileFollowBtn';
import { userType } from '@/types';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
import { UserProfileWrap } from './UserProfileWrap';

export type UserProfileProps = {
  type?: userType.UserProfileType;
};

export const UserProfile = ({ type = 'list', children }: PropsWithChildren<UserProfileProps>) => {
  return <div className={`${userProfileBase} ${userProfile[type]}`}>{setChildrenWithProps(children, { type })}</div>;
};

UserProfile.Wrap = UserProfileWrap;
UserProfile.Img = UserProfileImg;
UserProfile.Name = UserProfileName;
UserProfile.FollowBtn = UserProfileFollowBtn;

export default UserProfile;
