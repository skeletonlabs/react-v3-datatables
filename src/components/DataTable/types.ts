import type { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<T extends object> {
  /** Provide the source data for the table. */
  data: T[];
  /** In most cases this should use the default value. */
  dataFallback?: T[];
  /** Define your Column Definition. */
  columns: ColumnDef<T, string>[];
  /** Enable the search field. */
  enableSearch?: boolean;

  // Base ---
  base?: string;
  classes?: string;
  // Wrap ---
  wrapBase?: string;
  wrapClasses?: string;
  // Table ---
  tableBase?: string;
  tableWidth?: string;
  tableClasses?: string;
  // Head ---
  headBase?: string;
  headClasses?: string;
  // Body ---
  bodyBase?: string;
  bodyClasses?: string;
}
