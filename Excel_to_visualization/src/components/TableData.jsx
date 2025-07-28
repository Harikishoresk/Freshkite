function convertExcelDate(serial) {
  const curr = new Date(1900, 0, 1);
  const correctedDate = new Date(curr.setDate(curr.getDate() + serial - 1));
  const day = String(correctedDate.getDate()).padStart(2, "0");
  const month = String(correctedDate.getMonth() + 1).padStart(2, "0");
  const year = correctedDate.getFullYear();
  return `${day}-${month}-${year}`;
}

export default function TableData({ data }) {
  if (!data || data.length == 0) {
    return <p className="text-red-500 text-xl font-semibold">No data</p>;
  }
  const columns = Object.keys(data[0]);
  return (
    <div className="overflow-x-auto bg-white rounded shadow p-4 mt-6">
      <h1 className="text-center text-2xl font-bold text-black">Table Data</h1>
      <table className="min-w-full border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="border px-4 py-2 text-left bg-gray-100">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.entries(row).map(([key, val], j) => (
                <td key={j} className="border px-4 py-2">
                  {key === "Date" && typeof val === "number"
                    ? convertExcelDate(val)
                    : val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
