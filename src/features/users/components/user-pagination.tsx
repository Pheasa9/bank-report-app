"use client"

import {
    Table
} from "@tanstack/react-table"

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"


interface Props<TData> {

    table: Table<TData>

    pageIndex: number

}



export function UserPagination<TData>({

    table,

    pageIndex,

}: Props<TData>) {


    const pageCount = table.getPageCount()



    return (

        <div className="flex items-center justify-between px-2 py-3">


            {/* Left */}

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





            {/* Right */}

            <div className="flex items-center gap-2">


                <Button

                    variant="outline"

                    size="sm"

                    onClick={() => table.previousPage()}

                    disabled={!table.getCanPreviousPage()}

                >

                    <ChevronLeft className="h-4 w-4" />

                    Previous

                </Button>




                <Button

                    variant="outline"

                    size="sm"

                    onClick={() => table.nextPage()}

                    disabled={!table.getCanNextPage()}

                >

                    Next

                    <ChevronRight className="h-4 w-4" />

                </Button>


            </div>


        </div>

    )

}