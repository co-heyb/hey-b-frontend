import { ButtonHTMLAttributes } from 'react';
import { button, ButtonVariants } from './Button.css';

type ButtonTypes = NonNullable<ButtonVariants>;

type ButtonProps = {
  style?: ButtonTypes['style'];
  size?: ButtonTypes['size'];
  radius?: ButtonTypes['radius'];
  colorFill?: ButtonTypes['colorFill'];
};

const Button = ({
  style,
  size,
  radius,
  colorFill,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button className={button({ style, size, radius, colorFill })} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
