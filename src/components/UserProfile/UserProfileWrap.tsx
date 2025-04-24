import { userProfileWrapBase, userProfileWrap } from './UserProfile.css';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
import { UserProfileProps } from '.';
import { componentPropsType } from '@/types';

export const UserProfileWrap = ({
  children,
  type = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<UserProfileProps>) => {
  return (
    <span className={`${userProfileWrapBase} ${userProfileWrap[type]}`} {...props}>
      {setChildrenWithProps(children, { type })}
    </span>
  );
};
