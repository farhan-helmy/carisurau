import type { ColumnDef } from "@tanstack/react-table"
import {createColumnHelper} from '@tanstack/react-table'
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Surau = {
  id: string
  name: string
  unique_name: string
  is_approved: boolean
  is_approved_at: Date | null
  created_at: Date
  state: string
  district: string
}

const columnHelper = createColumnHelper<Surau>()
 
export const columns: ColumnDef<Surau>[] = [
  {
    accessorKey: "name",
    header: "Surau",
  },
  {
    accessorKey: "unique_name",
    header: "Id",
  },
  {
    accessorKey: "is_approved",
    header: "Approved",
  },
  {
    accessorKey: "is_approved_at",
    header: "Approved At",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    id: "actions",
    
  }
]