import React from 'react';
// import { jsxDEV } from "react/jsx-dev-runtime";
import { FaSave } from 'react-icons/fa'; // Example save icon
import { BsGridFill } from 'react-icons/bs'; // Example grid icon
import { AllUsers, HeaderLogo } from '../../../../assets/svgs/icon';
import GridFill from '../../../.././assets/svgs/UserApplicationForm/GridFill';
// import { HeaderLogo } from '../../../../assets/svgs/icon';
// import HeaderLogo from "../../../../assets/svgs/UserApplicationForm/HeaderLogo.svg";

const UserApplicationFormHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm mt-3 rounded-[6px] mx-">
      <div className="flex items-center ">
        {/* Placeholder for logo */}
        <div className="w-10 h-10"><HeaderLogo/></div>
        <span className="font-medium text-[24px] text-[#15A090] roboto-font">Beneficial Owner Testing</span>
      </div>
      <div className="flex items-center space-x-6 ">
        <button className="flex items-center px-4 py-2 border border-[#9A9A9A] rounded-sm roboto-font font-medium text-[16px] text-light-gray hover:bg-gray-100">
          <FaSave className="mr-2" />
          Save Progress
        </button>
        <button className="text-teal-700 hover:text-teal-600">
          <GridFill size={24} />
        </button>
      </div>
    </div>
  );
};

export default UserApplicationFormHeader; 