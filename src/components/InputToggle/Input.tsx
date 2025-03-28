import { InputHTMLAttributes } from 'react';
import { inputIcon, inputLabel } from './InputToggle.css';
import Icon from '../Icon';

const Input = ({ type, checked, children, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={inputLabel}>
      <input type={type} style={{ width: 0, visibility: 'hidden' }} checked={checked} {...props} />
      <span className={inputIcon}>
        <Icon src="/icons/check.svg" size="small" colorFill="white" alt="input icon" />
      </span>
      {children}
    </label>
  );
};

export default Input;
