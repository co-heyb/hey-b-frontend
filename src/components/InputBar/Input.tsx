import { InputHTMLAttributes } from 'react';
import { input, inputWrap } from './InputBar.css';
import React from 'react';
import { componentPropsType } from '@/types';

const Input = ({
  children,
  ...props
}: componentPropsType.ComponentBaseProps<InputHTMLAttributes<HTMLInputElement>>) => {
  return (
    <div className={inputWrap}>
      <input className={input} placeholder="" {...props} />
      {children}
    </div>
  );
};

export default React.memo(Input); // eslint-disable-line react/display-name
