import { inputHelper } from './InputToggle.css';

const InputHelper = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <p className={inputHelper} {...props}>
      {children}
    </p>
  );
};

export default InputHelper;
