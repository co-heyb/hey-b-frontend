import Link, { LinkProps } from 'next/link';
import { userProfileLinkBase } from './UserProfile.css';
import { UserProfileProps } from '.';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
import { componentPropsType } from '@/types';

const UserProfileLink = ({
  href,
  type = 'list',
  children,
  ...props
}: componentPropsType.ComponentBaseProps<UserProfileProps & LinkProps>) => {
  return (
    <Link href={href} className={userProfileLinkBase} {...props}>
      {setChildrenWithProps(children, { type })}
    </Link>
  );
};

export default UserProfileLink;
