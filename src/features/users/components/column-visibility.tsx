"use client"

import { useState } from "react"

import { Table } from "@tanstack/react-table"

import {
    VisibleDropdownMenu,
    VisibleDropdownMenuContent,
    VisibleDropdownMenuTrigger,
    VisibleDropdownMenuCheckboxItem,
} from "@/components/ui/visible-dropdown-menu"



interface Props<TData> {

    table: Table<TData>

}



export function ColumnVisibility<TData>({

    table,

}: Props<TData>) {


    const [open, setOpen] = useState(false)


    const [, refresh] = useState(0)





    return (

        <VisibleDropdownMenu>


            <VisibleDropdownMenuTrigger

                onClick={() =>
                    setOpen(!open)
                }

            >

                Columns


            </VisibleDropdownMenuTrigger>





            <VisibleDropdownMenuContent

                open={open}

            >


                {
                    table
                        .getAllLeafColumns()
                        .filter(
                            column =>
                                column.getCanHide()
                        )
                        .map(column => {


                            const visible =
                                column.getIsVisible()



                            return (

                                <VisibleDropdownMenuCheckboxItem

                                    key={
                                        column.id
                                    }


                                    checked={
                                        visible
                                    }


                                    onClick={() => {


                                        column.toggleVisibility(
                                            !visible
                                        )


                                        refresh(
                                            value => value + 1
                                        )


                                    }}

                                >


                                    {
                                        typeof column.columnDef.header === "string"

                                            ? column.columnDef.header

                                            : column.id
                                    }


                                </VisibleDropdownMenuCheckboxItem>

                            )

                        })
                }


            </VisibleDropdownMenuContent>


        </VisibleDropdownMenu>

    )

}