'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { type JobType } from '~/types/models'

import { DataTable } from '~/app/components/data-table'
import { Button } from '~/app/components/ui/button'
import { Checkbox } from '~/app/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '~/app/components/ui/dropdown-menu'

import { formatDate } from '~/lib/dates'

type JobsTableProps = {
  /**
   * The jobs to display in the table.
   */
  jobs: JobType[]
}

/**
 * A @tanstack/react-table that displays a list of jobs.
 *
 * @param {JobsTableProps} props The jobs table component props.
 * @returns {JSX.Element} The jobs table component.
 */
export function JobsTable({ jobs }: JobsTableProps) {
  const columns: ColumnDef<JobType>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'appliedAt',
      header: 'Applied At',
      cell: ({ row }) =>
        formatDate(row.getValue('appliedAt'), 'EEEE, MMMM do, yyyy'),
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      enableHiding: false,
    },
  ]

  return <DataTable columns={columns} data={jobs} />
}
