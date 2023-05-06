import { FC, forwardRef } from 'react';

// Types
import { IInputProps } from './types';


const Input: FC<IInputProps> = forwardRef(({
  error,
  className = '',
  ...props
}, ref) => {
  return (
    // @ts-ignore
    <input ref={ref} className={`border border-gray-500 focus:border-primary-500 transition focus:ring-primary-500 focus:ring-2 rounded outline-none p-2 ${className}`} {...props} />
  );
});

export default Input;