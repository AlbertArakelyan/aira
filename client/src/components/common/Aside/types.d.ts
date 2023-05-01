import { IconsType } from '../../shared/Icon/types';

export interface IAsideNavItemProps {
  icon: keyof IconsType;
  value: string;
  href: string;
}