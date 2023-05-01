// Components
import AsideNavItem from './AsideNavItem';

// Constants
import { asideNavItems } from '../../../constants';


const AsideNav = () => {
  const asideNavContent = (
    asideNavItems.map((asideNavItem) => {
      return (
        <AsideNavItem
          key={asideNavItem.id}
          value={asideNavItem.value}
          href={asideNavItem.href}
          icon={asideNavItem.icon}
        />
      )
    })
  );

  return (
    <nav className="mt-5">
      <ul>
        {asideNavContent}
      </ul>
    </nav>
  );
};

export default AsideNav;