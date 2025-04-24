import { componentPropsType } from '@/types';
import { inputHelper } from './InputBar.css';

const InputHelper = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <p className={inputHelper} {...props}>
      {children}
    </p>
  );
};

export default InputHelper;
