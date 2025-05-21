import React from 'react';

const Button = ({ label, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-medium hover:bg-dark w-full cursor-pointer rounded-md px-4 py-2 text-base font-bold text-white transition-all duration-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
