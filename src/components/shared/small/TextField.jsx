/* eslint-disable react/prop-types */

const TextField = ({
  label,
  Icon,
  className = "",
  containerClassName = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-start text-sm font-[600] md:text-base">
          {label}
        </label>
      )}
      <section
        className={`border-light flex w-full items-center gap-3 rounded-lg border bg-white ${containerClassName}`}
      >
        {Icon && Icon}
        <input
          className={`outline-hover h-[45px] w-full rounded-lg border-none px-4 text-sm text-gray-600 md:h-[50px] md:text-base ${inputClassName}`}
          {...rest}
        />
      </section>
    </div>
  );
};

export default TextField;
