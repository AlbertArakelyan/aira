import { FC } from 'react';

// Components
import { Icon } from '../../index';

// Types
import { IButtonProps } from './types';


const Button: FC<IButtonProps> = ({
  className = '',
  variant,
  children,
  icon,
  ...props
}) => {
  return (
    <button
      className={`${props.disabled ? 'bg-primary-300 cursor-not-allowed' : 'bg-primary-400 hover:bg-primary-500'} focus:bg-primary-600 focus:ring focus:ring-2 ring-primary-600 ring-offset-1 transition text-white px-4 py-2 rounded inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {icon && (
        <Icon name={icon} className="mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;