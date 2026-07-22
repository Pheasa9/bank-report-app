"use client"

import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"


interface Props<TData> {
    table: Table<TData>
    pageIndex: number
}


export function UserPagination<TData>({
    table,
    pageIndex
}: Props<TData>) {


    const pageCount = table.getPageCount()


    return (

        <div className="flex items-center justify-between  px-4 py-3">


            {/* Previous */}

            <Button

                variant="outline"

                size="sm"

                onClick={() => table.previousPage()}

                disabled={pageIndex === 0}

                className="gap-2"

            >

                <ChevronLeft className="h-4 w-4" />

                Previous

            </Button>



            {/* Page Info */}

            <div className="text-sm text-muted-foreground">

                Page{" "}

                <span className="font-medium text-foreground">
                    {pageIndex + 1}
                </span>

                {" "}of{" "}

                <span className="font-medium text-foreground">
                    {pageCount}
                </span>

            </div>



            {/* Next */}

            <Button

                variant="outline"

                size="sm"

                onClick={() => table.nextPage()}

                disabled={pageIndex >= pageCount - 1}

                className="gap-2"

            >

                Next

                <ChevronRight className="h-4 w-4" />

            </Button>


        </div>

    )
}