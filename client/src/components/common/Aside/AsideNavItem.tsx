import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Icon } from '../../index'

// Types
import { IAsideNavItemProps } from './types';


const AsideNavItem: FC<IAsideNavItemProps> = ({ icon, value }) => {
  return (
    <li className="px-4 py-2 hover:bg-gray-300 rounded transition-colors text-slate-700 mb-2">
      <Link className="flex items-center justify-start" to="/">
        <Icon
          name={icon}
          width={24}
          height={24}
          className="mr-3"
        />
        <span>{value}</span>
      </Link>
    </li>
  );
};

export default AsideNavItem;