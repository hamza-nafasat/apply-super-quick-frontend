import React, { useState } from 'react';
import UserApplicationDetail from './UserApplicationDetail';
import MenuIcon from './../../assets/svgs/MenuIcon';
import { CiMenuKebab } from 'react-icons/ci';

const bankForms = [
  {
    formType: 'Account Opening Form',
    fields: [
      'Full Name',
      'Date of Birth',
      'Gender',
      'Nationality',
      'Marital Status',
      'Permanent Address',
      'Current Address',
      'Mobile Number',
      'Email ID',
      'PAN Card Number',
      'Aadhaar Number',
      'Passport/Driving License Number',
      'Account Type',
      'Mode of Operation',
      'Initial Deposit Amount',
      'Nominee Details',
      'Occupation',
      'Employer Name',
      'Annual Income',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Loan Application Form',
    fields: [
      'Full Name',
      'DOB',
      'Contact Details',
      'Residential Address',
      'PAN/Aadhaar',
      'Loan Type',
      'Loan Amount',
      'Loan Tenure',
      'Loan Purpose',
      'Occupation',
      'Employer/Business',
      'Monthly Income',
      'Existing Loans',
      'Collateral Details',
      'Consent to Credit Check',
    ],
    status: 'Draft',
    createdAt: '2024-05-20T14:30:00Z',
    totalApplicants: 17,
  },
  //   {
  //     formType: 'Debit/Credit Card Application Form',
  //     fields: [
  //       'Full Name',
  //       'DOB',
  //       'PAN Number',
  //       'Contact Details',
  //       'Bank Account Number',
  //       'Branch Name',
  //       'Card Type',
  //       'Credit Limit',
  //       'Occupation',
  //       'Monthly Income',
  //       'Agreement to Terms',
  //     ],
  //     status: 'Inactive',
  //     createdAt: '2024-04-15T09:00:00Z',
  //     totalApplicants: 5,
  //   },
  {
    formType: 'Cheque Book Request ',
    fields: [
      'Account Holder Name',
      'Account Number',
      'Branch Name',
      'Number of Cheque Books',
      'Leaves per Book',
      'Signature',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'KYC Update Form',
    fields: [
      'Full Name',
      'Account Number',
      'PAN Number',
      'Aadhaar Number',
      'New Address',
      'New Phone',
      'New Email',
      'Address Proof',
      'Identity Proof',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Fixed Deposit Opening ',
    fields: [
      'Full Name',
      'Linked Account Number',
      'PAN Number',
      'Contact Details',
      'Deposit Amount',
      'Tenure',
      'Interest Payout Option',
      'Payment Mode',
      'Maturity Instructions',
      'Nominee Name',
      'Nominee Relationship',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Recurring Deposit ',
    fields: [
      'Full Name',
      'Account Number',
      'Contact Details',
      'Monthly Installment',
      'Tenure',
      'Debit Account',
      'Nominee Name',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'ATM Card Block Request ',
    fields: [
      'Account Holder Name',
      'Account Number',
      'Mobile Number',
      'ATM Card Number',
      'Reason for Blocking',
      'Block Instruction',
      'Signature',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Change of Address Form',
    fields: [
      'Account Holder Name',
      'Account Number',
      'Old Address',
      'New Address',
      'Proof of New Address',
      'Document Number',
      'Signature',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Standing Instruction Form',
    fields: [
      'Full Name',
      'Account Number',
      'Start Date',
      'Frequency',
      'Amount',
      'Payee Account Details',
      'Purpose',
      'End Date or Ongoing',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Internet Banking Application Form',
    fields: [
      'Full Name',
      'Account Number',
      'Mobile Number',
      'Email ID',
      'Access Type',
      'Linked Accounts',
      'Agreement to Terms',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Mobile Banking Application Form',
    fields: ['Account Number', 'Full Name', 'Mobile Number', 'Device Type', 'App Permissions', 'Agreement to Terms'],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
  {
    formType: 'Bank Guarantee / Letter of Credit Application',
    fields: [
      'Company Name',
      'Contact Person',
      'Address',
      'PAN/GSTIN',
      'Beneficiary Name',
      'Guarantee Amount',
      'Validity',
      'Guarantee Type',
      'Collateral Type',
      'Declaration Agreement',
    ],
    status: 'Active',
    createdAt: '2024-06-01T10:00:00Z',
    totalApplicants: 42,
  },
];

export default function ApplicationsCard() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleCardClick = form => {
    setSelectedForm(form);
  };

  const handleCloseDetail = () => {
    setSelectedForm(null);
  };

  if (selectedForm) {
    return <UserApplicationDetail form={selectedForm} onClose={handleCloseDetail} />;
  }

  return (
    <div className="p- sm:p- md:p- grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bankForms.map((form, index) => (
        <div
          key={index}
          className="relative flex min-w-0 border-2 flex-col rounded-2xl border bg-white p-3 shadow-sm transition duration-300 hover:shadow-md sm:p-4 md:p-6"
        >
          {/* Menu icon */}
          <div className="absolute top-3 right-3 cursor-pointer sm:top-4 sm:right-4">
            <CiMenuKebab />
          </div>
          <div className="flex items-start gap-2 md:gap-4">
            {/* <CardIcon /> */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-base leading-tight font-bold break-words text-gray-700 sm:text-lg md:text-2xl">
                  {form.formType}
                </h2>
                <span
                  className={`rounded-full px-2 py-1 font-semibold text-xs md:text-sm ${form.status === 'Active' ? 'bg-green-100 text-green-700' : form.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-600'}`}
                >
                  {form.status}
                </span>
              </div>
              <div className="mt-1 truncate text-xs text-gray-500 sm:text-sm">Created from CSV import</div>
            </div>
          </div>
          <div className="mt-3 space-y-1 text-sm text-gray-700 md:mt-3 md:text-base">
            <div className="flex items-center gap-1 md:gap-2">
              <svg
                className="h-4 w-4 text-[#21ccb0] md:h-5 md:w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{form.fields.length} form sections</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <svg
                className="h-4 w-4 text-[#21ccb0] md:h-5 md:w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-assisted completion available</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm ">
            <span className="text-gray-500">Applicants: {form.totalApplicants}</span>
            <span className="text-gray-500">Created: {new Date(form.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="mt-3 flex w-full flex-col items-center justify-between gap-3 md:mt-6 md:flex-row md:gap-4">
            <button
              className="bg-medium hover:bg-light w-full rounded px-5 py-2 font-semibold text-white shadow focus:outline-none md:w-auto"
              onClick={() => handleCardClick(form)}
            >
              Start Application
            </button>
            <button className="border-medium text-medium w-full rounded border bg-white px-5 py-2 font-semibold hover:bg-gray-50 focus:outline-none md:w-auto">
              Edit Structure
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
