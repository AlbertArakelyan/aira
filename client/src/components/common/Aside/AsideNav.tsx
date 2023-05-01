// Components
import AsideNavItem from './AsideNavItem';


const AsideNav = () => {
  return (
    <nav className="mt-5">
      <ul>
        <AsideNavItem icon="article" value="Summarizer" />
        <AsideNavItem icon="article" value="Something" />
      </ul>
    </nav>
  );
};

export default AsideNav;