import { InputHTMLAttributes } from 'react';
import { input, inputWrap } from './InputBar.css';
import React from 'react';

const Input = ({ children, ...props }: React.PropsWithChildren & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={inputWrap}>
      <input className={input} placeholder="" {...props} />
      {children}
    </div>
  );
};

export default React.memo(Input); // eslint-disable-line react/display-name
