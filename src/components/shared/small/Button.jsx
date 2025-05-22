import React from 'react';

const Button = ({ label, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hover:bg-medium border-medium w-full cursor-pointer rounded-md border-2 bg-transparent px-4 py-2 text-base font-bold text-black transition-all duration-300 hover:text-white ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
