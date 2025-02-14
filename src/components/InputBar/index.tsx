import { InputHTMLAttributes } from 'react';
import { inputBar } from './InputBar.css';
import Input from './Input';
import InputLabel from './InputLabel';
import InputHelper from './InputHelper';

const InputBar = ({ children, ...props }: React.PropsWithChildren & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={inputBar} {...props}>
      {children}
    </div>
  );
};

InputBar.Input = Input;
InputBar.Label = InputLabel;
InputBar.Helper = InputHelper;

export default InputBar;
