import React from 'react';

const Button = ({ label, onClick, className = '', type = 'button', icon: Icon, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hover:bg-dark hover:border-dark border-medium bg-medium w-full cursor-pointer rounded-[4px] border-2 px-[14px] py-[4px] text-base font-medium text-white transition-all duration-300 hover:text-white ${className}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon />}
        {label}
      </div>
    </button>
  );
};

export default Button;
