import { FC } from 'react';

// Components
import { Icon } from '../../index';

// Types
import { IAvatarProps } from './types';


const Avatar: FC<IAvatarProps> = ({ src, className = '' }) => {
  return (
    src ? (
      <p>soon ther will be a real avatar</p>
    ) : (
      <div className={`rounded-full p-2 border border-4 border-secondary-300 bg-gray-300 ${className}`}>
        <Icon name="user-astronaut"/>
      </div>
    )
  );
};

export default Avatar;