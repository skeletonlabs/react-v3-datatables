"use client";

import DataTable from "@/components/DataTable/DataTable";
import { createColumnHelper } from "@tanstack/react-table";

interface Element {
  position: string;
  name: string;
  symbol: string;
  atomic_no: string;
}

const ELEMENTS: Element[] = [
  { position: "0", name: "Iron", symbol: "Fe", atomic_no: "26" },
  { position: "1", name: "Rhodium", symbol: "Rh", atomic_no: "45" },
  { position: "2", name: "Iodine", symbol: "I", atomic_no: "53" },
  { position: "3", name: "Radon", symbol: "Rn", atomic_no: "86" },
  { position: "4", name: "Technetium", symbol: "Tc", atomic_no: "43" },
];

const columnHelper = createColumnHelper<Element>();
const columns = [
  columnHelper.accessor("position", {
    header: "Position",
    cell: (props) => <p>{props.getValue()}</p>,
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => <p>{props.getValue()}</p>,
  }),
  columnHelper.accessor("symbol", {
    header: "Symbol",
    cell: (props) => <p>{props.getValue()}</p>,
  }),
  columnHelper.accessor("atomic_no", {
    header: "Atomic No.",
    cell: (props) => <p>{props.getValue()}</p>,
  }),
];

export default function Home() {
  return (
    <div className="container mx-auto p-10">
      <DataTable
        data={ELEMENTS}
        columns={columns}
        bodyClasses="hover:[&>tr]:preset-tonal"
      />
    </div>
  );
}
