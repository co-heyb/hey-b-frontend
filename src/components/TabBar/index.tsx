'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import * as styles from './TabBar.css';
import React from 'react';

const TabItem = React.memo(
  ({ href, src, alt, label }: { href: string; src: string; alt: string; label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <li className={`${styles.tabItem.default} ${isActive ? styles.tabItem.active : ''}`}>
        <Link href={href} className={styles.tabItemLink}>
          <Icon src={src} width={24} height={24} alt={alt} active={isActive} />
          <span>{label}</span>
        </Link>
      </li>
    );
  },
  (prevProps, nextProps) => prevProps.href === nextProps.href, // ✅ href 변경 시에만 리렌더링
);

const TabBar = () => {
  return (
    <nav>
      <ul className={styles.tabList}>
        <TabItem href="/" src="/icons/home.svg" alt="홈 아이콘" label="홈" />
        <TabItem href="/community" src="/icons/community.svg" alt="커뮤니티 아이콘" label="커뮤니티" />
        <TabItem href="/store" src="/icons/store.svg" alt="상점 아이콘" label="상점" />
        <TabItem href="/talk" src="/icons/talk.svg" alt="채팅 아이콘" label="채팅" />
        <TabItem href="/mypage" src="/icons/user.svg" alt="마이페이지 아이콘" label="마이페이지" />
      </ul>
    </nav>
  );
};

export default TabBar;
