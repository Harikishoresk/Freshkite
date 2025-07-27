import React from "react";
import * as XLSX from "xlsx"
import {useData} from "../context/DataContext";

const ExcelFile = ({ FileLoaded }) => {
    const {set_data, set_filtered_data} = useData();

    const handleFile = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            const rawdata = event.target.result;
            const workbook = XLSX.read(rawdata, {type: "array"});
            const sheetname = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetname];
            const json = XLSX.utils.sheet_to_json(sheet);


            const filter_data = json.filter(row => 
                Object.values(row).every(val => val != null && val != '')
            ).map(row => {
                let filtered_date;
                const old_date = row["Date"];

                if(typeof old_date === "number") {
                    filtered_date = new Date(Date.UTC(1900, 0, old_date - 1))
                } else {
                    filtered_date = new Date(old_date)
                }
                return {...row, Date: filtered_date}
            } )

            filter_data.sort((a, b) => a.Date - b.Date);
      
            console.log("filtered data: ", filter_data)
            set_data(filter_data);
            set_filtered_data(filter_data);

            FileLoaded();
        }

        reader.readAsArrayBuffer(file)

    }

    return (
        <div className="mb-4">
            <label>Upload a valid Excel file (.xlsx, .xls)</label><br />
            <input type="file" accept=".xlsx, .xls" onChange={handleFile} />
{/*             {filename && <p className='text-green-600'>Loaded {filename}</p>} */}
        </div>
    )
}

export default ExcelFile