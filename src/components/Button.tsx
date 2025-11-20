import React from 'react';
import { colors } from '../styles/colors';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-[#A78BFA] text-white hover:bg-[#8B5CF6] active:scale-95',
    secondary: 'bg-white text-[#A78BFA] border-2 border-[#A78BFA] hover:bg-[#F5F3FF]',
    outline: 'bg-transparent text-[#A78BFA] border border-[#A78BFA] hover:bg-[#F5F3FF]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
};
