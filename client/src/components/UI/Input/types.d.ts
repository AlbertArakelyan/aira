import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  shade?: string;
  error?: string;
}