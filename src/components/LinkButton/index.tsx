import { linkButton, LinkButtonVariants } from './LinkButton.css';
import Link, { LinkProps } from 'next/link';
import { componentPropsType } from '@/types';

type LinkButtonTypes = NonNullable<LinkButtonVariants>;

const LinkButton = ({
  children,
  href,
  variant,
  size,
  wide,
  radius,
  colorFill,
  className,
  ...props
}: componentPropsType.ComponentBaseProps<LinkButtonTypes & LinkProps>) => {
  return (
    <>
      <Link href={href} className={`${linkButton({ variant, size, wide, radius, colorFill })} ${className}`} {...props}>
        {children}
      </Link>
    </>
  );
};

export default LinkButton;
