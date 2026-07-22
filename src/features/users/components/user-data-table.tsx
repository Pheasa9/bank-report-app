"use client"

import { useState } from "react"

import {
    ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import { User } from "@/types/user"

import { DataTable } from "./data-table"
import { UserPagination } from "./user-pagination"

interface Props {
    columns: ColumnDef<User>[]
    data: User[]
    globalFilter?: string
    onGlobalFilterChange?: (value: string) => void
}

export function UserDataTable({ columns, data, globalFilter = "", onGlobalFilterChange }: Props) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            sorting,
            pagination,
        },
        enableSorting: true,
        onGlobalFilterChange: onGlobalFilterChange,
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        globalFilterFn: (row, _columnId, filterValue) => {
            const searchValue = String(filterValue ?? "").trim().toLowerCase()

            if (!searchValue) {
                return true
            }

            return Object.values(row.original).some((value) =>
                String(value).toLowerCase().includes(searchValue)
            )
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
     
    <div className="flex h-full min-h-0 flex-col rounded-1xl border bg-card shadow-sm">
        <div className="flex-1 min-h-0 overflow-y-auto">
            <DataTable table={table} />
        </div>

       <div className="border-t p-2 shrink-0">
    <UserPagination 
        table={table}
        pageIndex={pagination.pageIndex}
    />
</div>
    </div>
)

    
}
