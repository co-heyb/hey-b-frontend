import { inputIcon, inputLabel } from './InputToggle.css';
import { InputHTMLAttributes } from 'react';
import Icon from '../Icon';
import React from 'react';

const Input = ({ type, checked, children, className, hidden, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const classes = `${inputLabel} ${className ? className : ''}`;
  return (
    <label className={classes}>
      <input type={type} style={{ width: 0, visibility: 'hidden' }} checked={checked} {...props} />
      {!hidden && (
        <span className={inputIcon}>
          <Icon src="/icons/check.svg" size="small" colorFill="white" alt="input icon" />
        </span>
      )}
      {children}
    </label>
  );
};

export default React.memo(Input);
