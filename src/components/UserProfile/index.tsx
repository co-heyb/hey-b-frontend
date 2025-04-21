import { HTMLAttributes, PropsWithChildren } from 'react';
import { userProfile, userProfileBase } from './UserProfile.css';
import { UserProfileImg } from './UserProfileImg';
import { UserProfileName } from './UserProfileName';
import { UserProfileFollowBtn } from './UserProfileFollowBtn';
import { userType } from '@/types';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
import { UserProfileWrap } from './UserProfileWrap';
import UserProfileLink from './UserProfileLink';
import { UserProfileDesc } from './UserProfileDesc';

export type UserProfileProps = {
  type?: userType.UserProfileType;
};

export const UserProfile = ({
  type = 'list',
  children,
  ...props
}: PropsWithChildren<UserProfileProps> & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${userProfileBase} ${userProfile[type]}`} {...props}>
      {setChildrenWithProps(children, { type })}
    </div>
  );
};

UserProfile.Wrap = UserProfileWrap;
UserProfile.Link = UserProfileLink;
UserProfile.Img = UserProfileImg;
UserProfile.Name = UserProfileName;
UserProfile.Desc = UserProfileDesc;
UserProfile.FollowBtn = UserProfileFollowBtn;

export default UserProfile;
