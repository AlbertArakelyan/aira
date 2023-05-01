// Components
import { Avatar } from '../../index';


const Header = () => {
  return (
    <header className="px-4 py-3 border-solid border-b-[1px] border-gray-200 flex justify-end items-center">
      <div className="flex justify-end items-center">
        <span className="mr-3">Albert Arakelyan</span>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;