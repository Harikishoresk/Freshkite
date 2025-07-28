import React from "react";

export default function FileUpload({ onUpload }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <label>Upload your Excel file(.xlsx, .xls)</label>
      <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
    </div>
  );
}
