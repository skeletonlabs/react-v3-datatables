export default function Home() {
  const tableData = [
    { position: "0", name: "Iron", symbol: "Fe", atomic_no: "26" },
    { position: "1", name: "Rhodium", symbol: "Rh", atomic_no: "45" },
    { position: "2", name: "Iodine", symbol: "I", atomic_no: "53" },
    { position: "3", name: "Radon", symbol: "Rn", atomic_no: "86" },
    { position: "4", name: "Technetium", symbol: "Tc", atomic_no: "43" },
  ];

  return (
    <div className="p-10">
      {/* Table */}
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Symbol</th>
              <th>Name</th>
              <th className="!text-right">Weight</th>
            </tr>
          </thead>
          <tbody className="hover:[&>tr]:preset-tonal-primary">
            {tableData.map((row) => (
              <tr key={row.atomic_no}>
                <td>{row.position}</td>
                <td>{row.symbol}</td>
                <td>{row.name}</td>
                <td className="text-right">{row.atomic_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
