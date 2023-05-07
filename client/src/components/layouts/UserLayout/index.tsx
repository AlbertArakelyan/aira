import { Outlet } from 'react-router-dom';

// Components
import { Aside, Header } from '../../index';

// Hooks
import { useUser } from '../../../hooks';

const UserLayout = () => {
  const { userData, loading, error } = useUser();

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error || !userData) {
    return (
      <p>Error</p>
    );
  }

  
  return (
    <div>
      <Aside />
      <div className="pl-[260px]">
        <Header userData={userData} />
        <main className="px-4 py-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;