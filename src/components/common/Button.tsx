import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-300',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-400 focus:ring-2 focus:ring-secondary-300',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
