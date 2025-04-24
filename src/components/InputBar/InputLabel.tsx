import { componentPropsType } from '@/types';
import { inputLabel } from './InputBar.css';

const InputLabel = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <label className={inputLabel} {...props}>
      {children}
    </label>
  );
};

export default InputLabel;
