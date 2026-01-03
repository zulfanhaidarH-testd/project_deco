import React from 'react';

export const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    ghost: 'hover:bg-gray-100 text-gray-700',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
  };
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-base',
    icon: 'h-10 w-10'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};