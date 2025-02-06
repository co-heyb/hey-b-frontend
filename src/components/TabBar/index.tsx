import Link from 'next/link';
import { tabBar } from './TabBar.css';
import Icon from '../Icon';

const TabBar = () => {
  return (
    <nav>
      <ul className={tabBar}>
        <li>
          <Link href={'/'}>
            <Icon src={'/icons/home.svg'} width={24} height={24} alt={'홈 아이콘'}></Icon>
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <Icon src={'/icons/community.svg'} width={24} height={24} alt={'커뮤니티 아이콘'}></Icon>
            <span>커뮤니티</span>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <Icon src={'/icons/store.svg'} width={24} height={24} alt={'상점 아이콘'}></Icon>
            <span>상점</span>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <Icon src={'/icons/talk.svg'} width={24} height={24} alt={'채팅 아이콘'}></Icon>
            <span>채팅</span>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <Icon src={'/icons/user.svg'} width={24} height={24} alt={'마이페이지 아이콘'}></Icon>
            <span>마이페이지</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default TabBar;
