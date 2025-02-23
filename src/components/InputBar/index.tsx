import { InputHTMLAttributes } from 'react';
import { inputBar, InputBarVariants } from './InputBar.css';
import Input from './Input';
import InputLabel from './InputLabel';
import InputHelper from './InputHelper';
import InputButtons from './InputButtons';

type InputBarTypes = NonNullable<InputBarVariants>;

export type InputBarProps = {
  status?: InputBarTypes['status'];
};

const InputBar = ({
  children,
  status,
  ...props
}: React.PropsWithChildren<InputBarProps & InputHTMLAttributes<HTMLInputElement>>) => {
  return (
    <div className={inputBar({ status })} {...props}>
      {children}
    </div>
  );
};

InputBar.Input = Input;
InputBar.Label = InputLabel;
InputBar.Helper = InputHelper;
InputBar.Buttons = InputButtons;

export default InputBar;
