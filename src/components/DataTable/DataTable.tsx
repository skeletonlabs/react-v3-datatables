// Based on:
// - https://tanstack.com/table/
// - https://makerkit.dev/blog/tutorials/reusable-table-component-reactjs
// -https://www.youtube.com/watch?v=CjqG277Hmgg

"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { DataTableProps } from "./types";

function DataTable<T extends object>({
  data,
  dataFallback = [],
  columns,
  enableSearch = true,
  // Base ---
  base = "grid grid-cols-1 gap-4",
  classes = "",
  // Base ---
  wrapBase = "table-wrap",
  wrapClasses = "",
  // Table ---
  tableBase = "table",
  tableWidth = "",
  tableClasses = "",
  // Head ---
  headBase = "",
  headClasses = "",
  // Body ---
  bodyBase = "",
  bodyClasses = "",
}: DataTableProps<T>) {
  // State
  const [tableData] = useState(data);
  const [globalFilter, setGlobalFilter] = useState("");

  // Set React Table hoook
  const table = useReactTable({
    columns,
    data: tableData ?? dataFallback,
    getCoreRowModel: getCoreRowModel(),
    // Search: https://tanstack.com/table/latest/docs/guide/global-filtering
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className={`${base} ${classes}`}>
      {/* Search */}
      {enableSearch && (
        <input
          type="search"
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          className="input"
        />
      )}
      {/* Wrap */}
      <div className={`${wrapBase} ${wrapClasses}`}>
        {/* Table */}
        {/* Optionally you can use Tanstack's size: `style={{ width: table.getTotalSize() }}` */}
        <table className={`${tableBase} ${tableWidth} ${tableClasses}`}>
          {/* Head */}
          <thead className={`${headBase} ${headClasses}`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} style={{ width: header.getSize() }}>
                    {/* @ts-expect-error type */}
                    {header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Body */}
          <tbody className={`${bodyBase} ${bodyClasses}`}>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <th key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
