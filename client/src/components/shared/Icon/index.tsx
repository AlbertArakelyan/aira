import { FC } from 'react';

// Components
import {
  Article,
  UserAstronaout,
  LoaderSpinner,
} from './icons';

// Types
import { IIconProps } from './types';


export const icons = {
  'article': Article,
  'user-astronaut': UserAstronaout,
  'loader-spinner': LoaderSpinner,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent {...props} />
  );
};

export default Icon;