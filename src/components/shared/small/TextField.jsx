/* eslint-disable react/prop-types */

const TextField = ({ label, Icon, ...rest }) => {
  return (
    <div className="flex flex-col  gap-1 w-full">
      {label && (
        <label className="text-sm md:text-base font-[600]">{label}</label>
      )}
      <section className="w-full border bg-white rounded-[10px] border-primary-lightGray px-4 flex items-center gap-3">
        {Icon && Icon}
        <input
          className="w-full border-none  outline-none text-sm md:text-base h-[45px] md:h-[50px]"
          {...rest}
        />
      </section>
    </div>
  );
};

export default TextField;
