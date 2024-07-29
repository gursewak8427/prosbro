import React, { useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';

function SlugFiles() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file here
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col mt-10 mb-5">
      <h1 className="text-gray-500">There are no files to display</h1>
      <button
        className="mt-4 mb-4 px-4 py-2 border border-gray-800 rounded-lg bg-white"
        onClick={handleButtonClick}
      >
        <AddIcon /> Add file
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default SlugFiles;
