import { NoDataSectionStyle } from './NoDataSection.css';
import { componentPropsType } from '@/types';

const NoDataSection = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <div className={NoDataSectionStyle} {...props}>
      {children}
    </div>
  );
};

export { NoDataSection };
