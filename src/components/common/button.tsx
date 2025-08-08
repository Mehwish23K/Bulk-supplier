import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
  textColor?: string;
  rounded?: string;
  underline?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  bgColor,
  textColor,
  rounded = 'rounded-md',
  underline = false,
  className = '',
  onClick
}: ButtonProps) {
  
  const variantStyles = {
    primary: 'bg-[#281158]  ',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50',
    text: 'bg-transparent text-gray-700 hover:underline'
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        font-medium 
        transition-all
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${rounded}
        ${underline ? 'underline underline-offset-4' : ''}
        ${bgColor ? bgColor : ''}
        ${textColor ? textColor : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}