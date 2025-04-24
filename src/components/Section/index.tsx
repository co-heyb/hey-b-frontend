import SectionContent from './SectionContent';
import SectionHeader from './SectionHeader';
import { componentPropsType } from '@/types';

const Section = ({ children, ...props }: componentPropsType.ComponentBaseProps) => {
  return <section {...props}>{children}</section>;
};

Section.Header = SectionHeader;
Section.Content = SectionContent;

export default Section;
