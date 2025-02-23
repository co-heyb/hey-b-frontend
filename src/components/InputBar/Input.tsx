import { InputHTMLAttributes } from 'react';
import { input, inputWrap } from './InputBar.css';

const Input = ({ children, ...props }: React.PropsWithChildren & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={inputWrap}>
      <input className={input} placeholder="" {...props} />
      {children}
    </div>
  );
};

export default Input;
