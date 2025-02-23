import { inputButtons } from './InputBar.css';

const InputButtons = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <div className={inputButtons} {...props}>
      {children}
    </div>
  );
};

export default InputButtons;
