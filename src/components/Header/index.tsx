import { header, logo, headerHidden, headerIcons } from './Header.css';
import Link from 'next/link';
import Button from '@/components/Button';
import Icon from '../Icon';

const Header = () => {
  return (
    <header className={header}>
      <h1>
        <Link href={'/'} className={logo}>
          {/* <Image width={200} height={200} src={'/images/logo.svg'} alt={'HeyB 로고'}></Image> */}
          <span className={headerHidden}>HeyB</span>
        </Link>
      </h1>
      <div className={headerIcons}>
        <Button style="plane">
          <Icon src={'/icons/notification.svg'} width={24} height={24} alt={'알림'} />
        </Button>
        <Button style="plane">
          <Icon src={'/icons/search.svg'} width={24} height={24} alt={'검색하기'} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
