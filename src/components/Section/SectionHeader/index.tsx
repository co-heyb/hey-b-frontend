import Icon from '@/components/Icon';
import { componentPropsType } from '@/types';
import Link from 'next/link';
import { sectionHeaderStyle, sectionTitleStyle } from '../Section.css';

const SectionHeader = ({
  children,
  href,
  className,
  ...props
}: componentPropsType.ComponentBaseProps<{ href: string }>) => {
  return (
    <Link href={href} className={`${sectionHeaderStyle} ${className}`} {...props}>
      <h2 className={sectionTitleStyle}>{children}</h2>
      <Icon src="/icons/arrow-right.svg" width={24} height={24} alt="더보기" />
    </Link>
  );
};

export default SectionHeader;
