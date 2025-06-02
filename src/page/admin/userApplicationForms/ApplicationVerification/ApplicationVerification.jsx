import React from "react";
import verificationImg from '../../../../assets/images/verificationImg.png'

const steps = [
  "Verification",
  "Company Information",
  "Company Owners",
  "Bank Account Information",
  "Processing Information",
  "Application Information",
  "Documents & Agreements",
  "Placeholders",
];

export default function ApplicationVerification() {
  const currentStepIndex = 1; // Assuming Step 2 is the current step based on the screenshot

  return (
    <div className="py-6 h-full bg-white px-6 rounded-[10px] ">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                ${index < currentStepIndex ? 'bg-[#15A090] border-[#15A090]' : index === currentStepIndex ? 'border-[#15A090]' : 'border-gray-300'}
              `}>
                {index < currentStepIndex ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : index === currentStepIndex ? (
                  <div className="w-3 h-3 rounded-full bg-[#15A090]" />
                ) : (
                   <div className="w-3 h-3 rounded-full bg-gray-300" />
                )}
              </div>
              <div className={`text-center mt-2 text-xs
                ${index === currentStepIndex ? 'text-[#15A090]' : 'text-gray-500'}
              `}>
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-auto border-t-2 mx-1
                ${index < currentStepIndex ? 'border-[#15A090]' : 'border-gray-300'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center mt-14">
        <h1 className="roboto-font font-semibold text-2xl text-dark-gray text-start ">
          1-Application Verification
        </h1>
        <p className="mt-10 roboto-font font-semibold text-[18px] text-medium-gray">We need to Verify your identity</p>

        {/* Illustration - Replace src with your asset */}
        <div className="flex justify-center mt-11">
          <img
            src={verificationImg}
            alt="Verification Illustration"
            className="w-64 h-auto"
          />
        </div>

        <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 mt-11">
          Verify ID
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-5 mt-12">
        <button className="bg-gray-200 text-gray-400 px-6 py-2 rounded cursor-not-allowed">
          &lt; Previous
        </button>
        <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
          Next &gt;
        </button>
      </div>
    </div>
  );
}
