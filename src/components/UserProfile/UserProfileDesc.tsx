import { userProfileDesc, userProfileDescBase } from './UserProfile.css';
import { UserProfileProps } from '.';
import { componentPropsType } from '@/types';

export const UserProfileDesc = ({
  children,
  type = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<UserProfileProps>) => {
  return (
    <span className={`${userProfileDescBase} ${userProfileDesc[type]}`} {...props}>
      {children}
    </span>
  );
};
