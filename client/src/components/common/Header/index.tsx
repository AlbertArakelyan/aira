import { FC } from 'react';

// Components
import { Avatar } from '../../index';

// Types
import { IHeaderProps } from './types';


const Header: FC<IHeaderProps> = ({ userData }) => {
  return (
    <header className="px-4 py-3 border-solid border-b-[1px] border-gray-200 flex justify-end items-center">
      <div className="flex justify-end items-center text-slate-700">
        <span className="mr-3">{userData.fullName}</span>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;