import React from "react";
import { useData } from "../context/DataContext";

const TableData = () => {
    const {filtered_data} = useData()

    if(!filtered_data.length) return (<div>No data </div>)

    const keys =  [
    "Date",
    "Player ID",
    "Player Name", 
    "Age", 
    "Game Type",
    "Table ID",
    "Stakes",
    "Result (Win/Loss)",
    "Amount ($)",
    "Duration (mins)"
  ];

    return (
        <div className="overflow-x-auto border rounded">
            <table className="mt-5 border-black border-collapse">
                <thead>
                    <tr className="border">
                        {keys.map(key => {
                            <th key={key} className="px-4 py-2 border">{key}</th>
                            }
                        )}
                    </tr>
                </thead>
                <tbody>
                    {filtered_data.map((row, i) => {
                        return <tr key={i} className="border px-2 py-1">
                            {keys.map(col => {
                                return <td key={col} className="px-2 py-1 border">
                                    {col === "Date" ? new Date(row[col]).toLocaleDateString("en-IN") : row[col]}
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableData;