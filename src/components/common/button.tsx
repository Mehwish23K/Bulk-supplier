
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;     // e.g. "bg-blue-500", "bg-red-400"
  textColor?: string;   // e.g. "text-white", "text-black"
  rounded?: string;     // e.g. "rounded-none", "rounded-full"
  underline?: boolean;  
  className?: string;   // Additional classes
  onClick?: () => void;
}

export default function Button({
  children,
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  rounded = 'rounded-md',
  underline = false,
  className = '',
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 
        font-medium 
        hover:opacity-90 
        transition-opacity
        ${bgColor} 
        ${textColor} 
        ${rounded}
        ${underline ? 'underline underline-offset-4' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}