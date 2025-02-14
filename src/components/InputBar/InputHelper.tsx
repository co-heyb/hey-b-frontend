import { inputHelper } from './InputBar.css';

const InputHelper = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <span className={inputHelper} {...props}>
      {children}
    </span>
  );
};

export default InputHelper;
