import LoaderIcon from "../../../assets/svgs/pages/LoaderIcon";

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 w-[100vw] h-1[100vh] z-10 bg-[#00000080]">
      <LoaderIcon />
    </div>
  );
};

export default Loader;
