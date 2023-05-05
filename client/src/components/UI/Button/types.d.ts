import { ButtonHTMLAttributes } from 'react';


type VariantType = 'primary' | 'secondary';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
}