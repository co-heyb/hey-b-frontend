import { componentPropsType } from '@/types';
import { comment } from './Comment.css';

const Comment = ({ children }: componentPropsType.ComponentBaseProps) => {
  return <div className={comment}>{children}</div>;
};

export default Comment;
