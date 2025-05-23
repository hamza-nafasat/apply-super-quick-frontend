import React from 'react';

export default function UserApplicationDetail({ form, onClose }) {
  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-medium">{form.formType}</h2>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-50 p-4">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">Required Fields</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {form.fields.map((field, idx) => (
              <div
                key={idx}
                className="rounded-md bg-white p-3 shadow-sm"
              >
                {field}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 