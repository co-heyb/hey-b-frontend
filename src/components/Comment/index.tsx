import { PropsWithChildren } from 'react';
import { comment } from './Comment.css';

const Comment = ({ children }: PropsWithChildren) => {
  return <div className={comment}>{children}</div>;
};

export default Comment;
