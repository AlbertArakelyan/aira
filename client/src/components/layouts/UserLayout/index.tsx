import { Outlet } from 'react-router-dom';

// Components
import { Aside, Header } from '../../index';


const UserLayout = () => {
  return (
    <div>
      <Aside />
      <div className="pl-[260px]">
        <Header />
        <main className="px-4 py-3">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default UserLayout;