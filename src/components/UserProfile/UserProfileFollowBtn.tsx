import React from 'react';
import Button, { ButtonProps } from '../Button';
import { userProfileFollowBtn, userProfileFollowBtnBase } from './UserProfile.css';
import Icon from '../Icon';
import { userType } from '@/types';
import { UserProfileProps } from '.';

type UserProfileFollowBtnProps = {
  isFollowing: boolean;
};

export const UserProfileFollowBtn = ({
  isFollowing,
  type = 'list',
  ...props
}: UserProfileFollowBtnProps & UserProfileProps & ButtonProps) => {
  return (
    <Button className={`${userProfileFollowBtnBase} ${userProfileFollowBtn[type]}`} colorFill="mint" {...props}>
      팔로우 {isFollowing && <Icon src={'/icons/check.svg'} alt="완료 아이콘" size="small" />}
    </Button>
  );
};
