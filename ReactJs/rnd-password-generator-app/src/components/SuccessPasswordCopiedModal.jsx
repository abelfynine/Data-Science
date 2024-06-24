import React from 'react';

const SuccessPasswordCopiedModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-black text-xl font-semibold mb-2">Success</h2>
            <p className="text-black mb-4">Password copied to clipboard!</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={onClose}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPasswordCopiedModal;
