import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileUpload = ({ setCsvData }) => { // Receive setCsvData as a prop
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setCsvData(content); // Use the prop to update CSV data
        navigate('/view-data');
      };
      reader.readAsText(file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default FileUpload;
