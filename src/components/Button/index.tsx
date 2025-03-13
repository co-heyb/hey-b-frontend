import { ButtonHTMLAttributes } from 'react';
import { button, ButtonVariants } from './Button.css';

type ButtonTypes = NonNullable<ButtonVariants>;

export interface ButtonProps {
  style?: ButtonTypes['style'];
  size?: ButtonTypes['size'];
  wide?: ButtonTypes['wide'];
  radius?: ButtonTypes['radius'];
  colorFill?: ButtonTypes['colorFill'];
}

const Button = ({
  children,
  style,
  size,
  wide,
  radius,
  colorFill,
  className,
  ...props
}: React.PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button className={`${button({ style, size, wide, radius, colorFill })} ${className}`} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
