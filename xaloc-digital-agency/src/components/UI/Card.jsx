// src/components/UI/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  gradient = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl' : '';
  const glassClasses = glass ? 'glass-dark' : 'bg-gray-800';
  const gradientClasses = gradient ? 'bg-gradient-to-r from-xaloc-orange/10 to-xaloc-coral/10' : '';

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${glassClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;