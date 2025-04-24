import { ButtonHTMLAttributes } from 'react';
import { button, ButtonVariants } from './Button.css';
import { componentPropsType } from '@/types';

type ButtonTypes = NonNullable<ButtonVariants>;

const Button = ({
  children,
  variant,
  size,
  wide,
  radius,
  colorFill,
  className,
  ...props
}: componentPropsType.ComponentBaseProps<ButtonTypes & ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <>
      <button className={`${button({ variant, size, wide, radius, colorFill })} ${className}`} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
