/* eslint-disable react/prop-types */

const Button = ({
  bg,
  width,
  height,
  radius,
  color,
  text,
  size,
  weight,
  cursor,
  borderColor,
  className,
  Icon,
  ...rest
}) => {
  const style = {
    background: bg,
    borderRadius: radius,
    color: color ? color : "#fff",
    fontWeight: weight,
    border: borderColor ? `1px solid ${borderColor}` : "none",
  };

  return (
    <button
      style={style}
      className={`flex items-center justify-center text-nowrap px-7 py-5 transition-all duration-300 hover:bg-[#3dc5ff] capitalize ${
        width ? width : "w-full"
      }
      ${height ? height : "h-[36px]"} 
      ${size ? size : "text-xs sm:text-sm md:text-base"} 
      ${cursor ? cursor : "pointer"}
      ${bg ? bg : "bg-primary-lightBlue"}
      ${radius ? radius : "rounded-[8px]"}
      disabled:cursor-not-allowed
      disabled:opacity-50
      ${className}
      `}
      {...rest}
    >
      {text}
      {Icon && <Icon fontSize={20} />}
    </button>
  );
};

export default Button;
