import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 group relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-400 hover:to-pink-400 hover:scale-105',
    secondary: 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105',
    ghost: 'text-orange-400 hover:text-orange-300 hover:bg-orange-500/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;