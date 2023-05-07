import { ButtonHTMLAttributes } from 'react';

// Types
import { IconsType } from '../../shared/Icon/types';


type VariantType = 'primary' | 'secondary';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  icon?: keyof IconsType | null;
}