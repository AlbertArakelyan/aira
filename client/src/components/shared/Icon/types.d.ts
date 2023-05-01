import { icons } from './index';

type IconsType = typeof icons;

interface IIconComponentProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

interface IIconProps extends IIconComponentProps {
  name: keyof IconsType;
}