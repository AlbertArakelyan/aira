import { FC } from 'react';

// Components
import {
  Article,
} from './icons';

// Types
import { IIconProps } from './types';


export const icons = {
  'article': Article,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent {...props} />
  );
};

export default Icon;