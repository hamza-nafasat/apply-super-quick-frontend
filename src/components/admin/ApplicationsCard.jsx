import React, { useState } from 'react';
import UserApplicationDetail from './UserApplicationDetail';
import MenuIcon from './../../assets/svgs/MenuIcon';
import { CiMenuKebab } from 'react-icons/ci';

const statusOptions = ['All', 'Active', 'Draft', 'Inactive'];

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
  const [clientQuery, setClientQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleCardClick = form => {
    setSelectedForm(form);
  };

  const handleCloseDetail = () => {
    setSelectedForm(null);
  };

  // Filtering logic
  const filteredForms = bankForms.filter(form => {
    // Search by client (for demo, match in formType)
    const clientMatch = clientQuery === '' || form.formType.toLowerCase().includes(clientQuery.toLowerCase());
    // Search by name (for demo, match in formType)
    const nameMatch = nameQuery === '' || form.formType.toLowerCase().includes(nameQuery.toLowerCase());
    // Status filter
    const statusMatch = statusFilter === 'All' || form.status === statusFilter;
    // Date range filter
    const created = new Date(form.createdAt);
    const fromMatch = !dateFrom || created >= new Date(dateFrom);
    const toMatch = !dateTo || created <= new Date(dateTo);
    return clientMatch && nameMatch && statusMatch && fromMatch && toMatch;
  });

  if (selectedForm) {
    return <UserApplicationDetail form={selectedForm} onClose={handleCloseDetail} />;
  }

  return (
    <div className='bg-white p-5 rounded-md shadow'>
      {/* Heading */}
      <h2 className="mb-2 text-2xl font-bold text-gray-800">Applications</h2>
      {/* Filter Bar */}
      <div className="mb-6 rounded-xl  p-  mt-6">
        {/* Client Search - full width with icon */}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="w-full rounded border border-gray-300 pl-10 pr-3 py-2 text-sm focus:border-medium focus:outline-none"
            placeholder="Search by client type..."
            value={clientQuery}
            onChange={e => setClientQuery(e.target.value)}
          />
        </div>
        {/* Other filters in a row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
          {/* Name */}
          <div className="flex-1 min-w-[180px]">
            <label className="mb-1 block text-sm font-semibold text-gray-700">Search by Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-medium focus:outline-none"
              placeholder="Enter name to search..."
              value={nameQuery}
              onChange={e => setNameQuery(e.target.value)}
            />
          </div>
          {/* Status */}
          <div className="flex-1 min-w-[180px]">
            <label className="mb-1 block text-sm font-semibold text-gray-700">Status</label>
            <select
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-medium focus:outline-none"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(opt => (
                <option key={opt} value={opt}>{opt === 'All' ? 'All Statuses' : opt}</option>
              ))}
            </select>
          </div>
          {/* Date Range */}
          <div className="flex-1 min-w-[220px]">
            <label className="mb-1 block text-sm font-semibold text-gray-700">Date Range</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="w-1/2 rounded border border-gray-300 px-3 py-2 text-sm focus:border-medium focus:outline-none"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
              />
              <input
                type="date"
                className="w-1/2 rounded border border-gray-300 px-3 py-2 text-sm focus:border-medium focus:outline-none"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="p- sm:p- md:p- grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredForms.map((form, index) => (
          <div
            key={index}
            className="relative flex min-w-0 flex-col rounded-2xl border border-2 bg-white p-3 shadow-sm transition duration-300 hover:shadow-md sm:p-4 md:p-6"
          >
            {/* Menu icon */}
            <div className="absolute top-3 right-3 cursor-pointer sm:top-4 sm:right-4">
              {/* <CiMenuKebab /> */}
            </div>
            <div className="flex items-start gap-2 md:gap-4">
              {/* <CardIcon /> */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-base leading-tight font-bold break-words text-gray-700 sm:text-lg md:text-2xl">
                    {form.formType}
                  </h2>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold md:text-sm ${form.status === 'Active' ? 'bg-green-100 text-green-700' : form.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-600'}`}
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
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
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
    </div>
  );
}
