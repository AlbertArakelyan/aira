import { FC } from 'react';

// Types
import { IButtonProps } from './types';


const Button: FC<IButtonProps> = ({
  className = '',
  variant,
  children,
  ...props
}) => {
  return (
    <button
      className={`bg-primary-400 hover:bg-primary-500 focus:bg-primary-600 focus:ring focus:ring-2 ring-primary-600 ring-offset-1 transition text-white px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;