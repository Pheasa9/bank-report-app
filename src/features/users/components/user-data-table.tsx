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
    VisibilityState,
} from "@tanstack/react-table"

import { User } from "@/types/user"

import { DataTable } from "./data-table"
import { UserPagination } from "./user-pagination"
import { ColumnVisibility } from "./column-visibility"



interface Props {
    columns: ColumnDef<User>[]
    data: User[]
    globalFilter?: string
    onGlobalFilterChange?: (value: string) => void
}



export function UserDataTable({

    columns,

    data,

    globalFilter = "",

    onGlobalFilterChange

}: Props) {


    const [sorting, setSorting] =
        useState<SortingState>([])



    const [pagination, setPagination] =
        useState({

            pageIndex: 0,

            pageSize: 10,

        })




    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>(() => {


            if (typeof window === "undefined") {

                return {}

            }


            const saved =
                localStorage.getItem(
                    "user-column-visibility"
                )


            return saved
                ? JSON.parse(saved)
                : {}

        })



    // force ColumnVisibility refresh
    const [columnVersion, setColumnVersion] =
        useState(0)





    const handleColumnVisibilityChange = (

        updater:
            | VisibilityState
            | ((prev: VisibilityState) => VisibilityState)

    ) => {


        setColumnVisibility(prev => {


            const next =

                typeof updater === "function"

                    ? updater(prev)

                    : updater



            localStorage.setItem(

                "user-column-visibility",

                JSON.stringify(next)

            )



            return next

        })



        setColumnVersion(
            value => value + 1
        )


    }







    const table = useReactTable({


        data,


        columns,



        state: {

            globalFilter,

            sorting,

            pagination,

            columnVisibility,

        },



        enableSorting: true,



        onGlobalFilterChange,


        onSortingChange: setSorting,


        onPaginationChange: setPagination,



        onColumnVisibilityChange:
            handleColumnVisibilityChange,



        globalFilterFn: (

            row,

            _columnId,

            filterValue

        ) => {


            const searchValue =
                String(filterValue ?? "")
                    .trim()
                    .toLowerCase()



            if (!searchValue) {

                return true

            }



            return Object.values(row.original)

                .some((value) =>

                    String(value)
                        .toLowerCase()
                        .includes(searchValue)

                )

        },



        getCoreRowModel:
            getCoreRowModel(),



        getFilteredRowModel:
            getFilteredRowModel(),



        getSortedRowModel:
            getSortedRowModel(),



        getPaginationRowModel:
            getPaginationRowModel(),


    })







    return (

<div
    className="
        flex
        h-full
        min-h-0
        flex-1
        flex-col
        overflow-hidden
        rounded-xl
        border
        bg-card
        shadow-sm
    "
>


            <div className="flex justify-end p-2">


                <ColumnVisibility

                    key={columnVersion}

                    table={table}

                />


            </div>





            <div className="flex-1 min-h-0 overflow-y-auto">


                <DataTable

                    table={table}

                />


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