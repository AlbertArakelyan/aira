import { IconsType } from '../../components/shared/Icon/types';

interface IAsideNavItem {
  id: string;
  value: string;
  href: string;
  icon: keyof IconsType;
}