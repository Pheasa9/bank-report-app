"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Table as ReactTable,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface Props<TData> {
    table?: ReactTable<TData>
    columns?: ColumnDef<TData>[]
    data?: TData[]
}


export function DataTable<TData>({
    table,
    columns,
    data,
}: Props<TData>) {


    const resolvedTable = table ?? useReactTable({

        data: data ?? [],

        columns: columns ?? [],

        getCoreRowModel: getCoreRowModel(),

        getFilteredRowModel: getFilteredRowModel(),

        getSortedRowModel: getSortedRowModel(),

        getPaginationRowModel: getPaginationRowModel(),

    })



    return (

        <div
            className="
                relative
                h-full
                overflow-auto
                rounded-md
                border
            "
        >

            <Table className="min-w-full">


                <TableHeader>


                    {
                        resolvedTable
                            .getHeaderGroups()
                            .map(headerGroup => (

                                <TableRow
                                    key={headerGroup.id}
                                >

                                    {
                                        headerGroup.headers.map(header => (

                                            <TableHead

                                                key={header.id}

                                                className={`
                                                    sticky
                                                    top-0
                                                    z-20
                                                    bg-card
                                                    border-b
                                                    font-semibold
                                                    text-foreground
                                                    whitespace-nowrap

                                                    ${
                                                        header.column.getCanSort()
                                                            ? "cursor-pointer select-none"
                                                            : ""
                                                    }
                                                `}

                                                onClick={
                                                    header.column.getCanSort()
                                                        ? header.column.getToggleSortingHandler()
                                                        : undefined
                                                }

                                            >

                                                {
                                                    header.isPlaceholder

                                                        ? null

                                                        :

                                                        <div
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-2
                                                            "
                                                        >

                                                            {
                                                                flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )
                                                            }


                                                            {
                                                                header.column.getCanSort()
                                                                    ?

                                                                    <span className="text-xs">

                                                                        {
                                                                            header.column.getIsSorted() === "asc"

                                                                                ? "▲"

                                                                                : header.column.getIsSorted() === "desc"

                                                                                    ? "▼"

                                                                                    : ""
                                                                        }

                                                                    </span>

                                                                    :

                                                                    null
                                                            }


                                                        </div>
                                                }


                                            </TableHead>

                                        ))
                                    }


                                </TableRow>

                            ))
                    }


                </TableHeader>





                <TableBody>


                    {
                        resolvedTable
                            .getRowModel()
                            .rows.length > 0


                            ?


                            resolvedTable
                                .getRowModel()
                                .rows
                                .map(row => (

                                    <TableRow
                                        key={row.id}
                                    >

                                        {
                                            row
                                                .getVisibleCells()
                                                .map(cell => (

                                                    <TableCell
                                                        key={cell.id}
                                                    >

                                                        {
                                                            flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )
                                                        }


                                                    </TableCell>

                                                ))
                                        }


                                    </TableRow>

                                ))


                            :


                            <TableRow>

                                <TableCell

                                    colSpan={
                                        resolvedTable
                                            .getAllColumns()
                                            .length
                                    }

                                    className="
                                        py-8
                                        text-center
                                    "

                                >

                                    No data

                                </TableCell>


                            </TableRow>

                    }


                </TableBody>


            </Table>


        </div>

    )

}