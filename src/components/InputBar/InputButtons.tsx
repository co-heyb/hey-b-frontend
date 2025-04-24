import { componentPropsType } from '@/types';
import { inputButtons } from './InputBar.css';

const InputButtons = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <div className={inputButtons} {...props}>
      {children}
    </div>
  );
};

export default InputButtons;
