import { FC } from 'react';

// Types
import { IIconComponentProps } from '../types';


const LoaderSpinner: FC<IIconComponentProps> = ({
  color = 'currentColor',
  width = 24,
  height = 24,
  className = '',
  ...props
}) => {
  return (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" fill="none" stroke={color} stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" />
    </svg>
  );
};

export default LoaderSpinner;