import React from "react";
import { useState } from "react";
import * as xlsx from 'xlsx';


const FileUploader = ({ setData }) => {
  const [filename, setfilename] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setfilename(file.name);
    const reader = new FileReader();

    reader.onload = (event) => {
      const binary = event.target.result;
      const workbook = xlsx.read(binary, { type: 'binary' });
      const sheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheet];
      const raw_json = xlsx.utils.sheet_to_json(worksheet, { defval: null });

      const filtered_json = raw_json.filter(row =>
        Object.values(row).every(val => val !== null && val !== '')
      );

      setData(filtered_json);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <label>Upload a valid Excel file (.xlsx, .xls)</label><br />
      <input type="file" accept=".xlsx, .xls, .csv" onChange={handleUpload} />
      {filename && <p className='text-green-600'>Loaded {filename}</p>}
    </div>
  );
};

export default FileUploader;