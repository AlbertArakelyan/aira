import { FC } from 'react';

// Types
import { IInputProps } from './types';


const Input: FC<IInputProps> = ({
  color = 'primary',
  shade = '500',
  error,
  className = '',
  ...props
}) => {
  return (
    <input className={`border border-${color}-${shade} rounded outline-none p-2 ${className}`} {...props} />
  );
};

export default Input;