import { Link } from 'react-router-dom';

// Components
import AsideNav from './AsideNav';


const Aside = () => {
  return (
    <aside className="max-w-[260px] p-4 w-full fixed t-0 l-0 h-screen bg-gray-100 border-solid border-r-[1px] border-gray-200">
      <h1 className="text-4xl text-slate-700">
        <Link to="/">Aira</Link>
      </h1>
      <AsideNav />  
    </aside>
  );
};

export default Aside;