import React, { useState } from 'react';

const FileNameModal = ({ show, onSave, onClose }) => {
  const [fileName, setFileName] = useState('');

  const handleSave = () => {
    onSave(fileName);
    setFileName('');
  };

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow">
          <label htmlFor="fileName" className="text-black block mb-2">File Name:</label>
          <input
            id="fileName"
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="text-black w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          />
          <div className="flex justify-between">
            <button onClick={handleSave} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              Save
            </button>
            <button onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileNameModal;