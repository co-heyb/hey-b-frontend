import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { userProfileLinkBase } from './UserProfile.css';
import { UserProfileProps } from '.';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';

const UserProfileLink = ({
  href,
  type = 'list',
  children,
  ...props
}: PropsWithChildren<UserProfileProps & LinkProps>) => {
  return (
    <Link href={href} className={userProfileLinkBase} {...props}>
      {setChildrenWithProps(children, { type })}
    </Link>
  );
};

export default UserProfileLink;
