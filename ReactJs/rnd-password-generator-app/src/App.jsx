import React, { useState } from 'react';
import SuccessPasswordCopiedModal from './components/SuccessPasswordCopiedModal';
import FileNameModal from './components/FileNameModal';
import './index.css';

const App = () => {
  const [passwordLength, setPasswordLength] = useState(9);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [successPasswordCopiedModalVisible, setSuccessPasswordCopiedModalVisible] = useState(false);
  const [fileNameModalVisible, setFileNameModalVisible] = useState(false);

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (charset === '') {
      setGeneratedPassword('');
      return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setGeneratedPassword(password);
  };

  const handleCopyToClipboard = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword).then(() => {
        setSuccessPasswordCopiedModalVisible(true);
      });
    }
  };

  const downloadPassword = (fileName) => {
    const blob = new Blob([generatedPassword], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName + '.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <>
      <div className="min-h-screen bg-[#020202] flex items-center justify-center">
        <div className="max-w-sm bg-[#0D2818] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Random Password Generator</h2>

          <div className='mb-4 p-4 bg-[#1a3a29] rounded-lg'>
            <span className="text-white">Characters: {passwordLength}</span>
            <input
              type="range"
              min="8"
              max="33"
              step="1"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              className="w-full mb-4 appearance-none bg-white h-1 rounded-lg outline-none"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${(passwordLength - 8) * (100 / 25)}%, #6B7280 ${(passwordLength - 8) * (100 / 25)}%, #6B7280 100%)`
              }}
            />
          </div>

          <div className="mb-4 p-4 bg-[#1a3a29] rounded-lg">
            <div className="flex items-center justify-between">
              <span>Include Uppercase</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

          <div className="mb-4 p-4 bg-[#1a3a29] rounded-lg">
            <div className="flex items-center justify-between">
              <span>Include Lowercase</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeLowercase}
                  onChange={() => setIncludeLowercase(!includeLowercase)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

          <div className="mb-4 p-4 bg-[#1a3a29] rounded-lg">
            <div className="flex items-center justify-between">
              <span>Include Numbers</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

          <div className="mb-4 p-4 bg-[#1a3a29] rounded-lg">
            <div className="flex items-center justify-between">
              <span>Include Symbols</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

          <div className='flex items-center'>
            <button
              onClick={generatePassword}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Generate Password
            </button>

            <button
              onClick={() => {
                if (generatedPassword) {
                  setFileNameModalVisible(true)
                }
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Password
            </button>
            <FileNameModal
              show={fileNameModalVisible}
              onSave={(fileName) => {
                downloadPassword(fileName);
                setFileNameModalVisible(false);
              }}
              onClose={() => setFileNameModalVisible(false)}
            />
          </div>


          <div className="mt-4 p-2 bg-gray-800 rounded flex items-center">
            <p className="text-base font-mono flex-grow" disabled={!generatedPassword}>{generatedPassword}</p>
            <i onClick={handleCopyToClipboard} className="fas fa-copy fa-xs cursor-pointer"></i>
            <SuccessPasswordCopiedModal show={successPasswordCopiedModalVisible} onClose={() => setSuccessPasswordCopiedModalVisible(false)} />
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
