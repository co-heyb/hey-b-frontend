import { InputHTMLAttributes } from 'react';
import { input } from './InputBar.css';

const Input = ({ children, ...props }: React.PropsWithChildren & InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={input} placeholder="" {...props} />;
};

export default Input;
