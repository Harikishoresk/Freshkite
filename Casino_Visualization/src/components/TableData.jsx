const TableData = ({ data }) => {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div>
      <table className="mt-5 border border-collapse">
        <thead>
          <tr className="border">
            {columns.map((col, i) => (
              <th className="border px-2 py-1" key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr className="border px-2 py-1" key={i}>
              {columns.map((col) => (
                <td className="border px-2" key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;