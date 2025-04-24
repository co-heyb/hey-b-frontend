import { componentPropsType } from '@/types';
import { sectionContentStyle } from '../Section.css';

const SectionContent = ({ children, className, ...props }: componentPropsType.ComponentBaseProps) => {
  return (
    <div className={`${sectionContentStyle} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default SectionContent;
