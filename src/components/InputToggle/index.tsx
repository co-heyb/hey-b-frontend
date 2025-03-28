import { HTMLAttributes, InputHTMLAttributes, useId } from 'react';
import { inputIcon, inputLabel, inputToggle, InputToggleVariants } from './InputToggle.css';
import InputHelper from './InputHelper';
import Icon from '../Icon';
import Input from './Input';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';

type InputToggleTypes = NonNullable<InputToggleVariants>;

export type InputToggleProps = {
  status?: InputToggleTypes['status'];
};

const InputToggle = ({
  children,
  status,
  ...props
}: React.PropsWithChildren<InputToggleProps> & HTMLAttributes<HTMLDivElement>) => {
  const autoName = useId();
  return (
    <div className={inputToggle({ status })} {...props}>
      {setChildrenWithProps(children, { name: autoName })}
    </div>
  );
};

InputToggle.Input = Input;
InputToggle.Helper = InputHelper;

export default InputToggle;
