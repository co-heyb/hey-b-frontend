import { ButtonHTMLAttributes } from 'react';
import { button, ButtonVariants } from './Button.css';

type ButtonTypes = NonNullable<ButtonVariants>;

export interface ButtonProps {
  variant?: ButtonTypes['variant'];
  size?: ButtonTypes['size'];
  wide?: ButtonTypes['wide'];
  radius?: ButtonTypes['radius'];
  colorFill?: ButtonTypes['colorFill'];
}

const Button = ({
  children,
  variant,
  size,
  wide,
  radius,
  colorFill,
  className,
  ...props
}: React.PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button className={`${button({ variant, size, wide, radius, colorFill })} ${className}`} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
