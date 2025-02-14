import { inputLabel } from './InputBar.css';

const InputLabel = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <label className={inputLabel} {...props}>
      {children}
    </label>
  );
};

export default InputLabel;
