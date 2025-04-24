import { userProfileName, userProfileNameBase } from './UserProfile.css';
import { UserProfileProps } from '.';
import { componentPropsType } from '@/types';

export const UserProfileName = ({
  children,
  type = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<UserProfileProps>) => {
  return (
    <span className={`${userProfileNameBase} ${userProfileName[type]}`} {...props}>
      {children}
    </span>
  );
};
