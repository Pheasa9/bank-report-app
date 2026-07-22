"use client";


import { User } from "@/types/user";

import {
    ColumnDef
} from "@tanstack/react-table";

import Image from "next/image";

import { ArrowUpDown } from "lucide-react";

import { UserActions } from "./user-actions";



export const columns = (
    {
        onView
    }: {
        onView?: (user: User) => void
    }

): ColumnDef<User>[] => [



{
    accessorKey:"avatar",

    header:"Avatar",

    cell: ({ row }) => (

        <Image

            src={row.original.avatar}

            alt={row.original.fullname}

            width={40}

            height={40}

            className="rounded-full object-cover"

        />

    ),

},



{
    accessorKey: "fullname",
    header: ({ column }) => (
        <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="flex items-center gap-2 text-left"
        >
            <span>Full Name</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    ),
    enableSorting: true,
},



{
    accessorKey:"username",

    header: ({ column }) => (
        <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="flex items-center gap-2 text-left"
        >
            <span>Username</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    ),
    enableSorting: true,

},



{
    accessorKey:"email",

    header: ({ column }) => (
        <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="flex items-center gap-2 text-left"
        >
            <span>Email</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    ),
    enableSorting: true,

},



{
    accessorKey:"phone",

    header: ({ column }) => (
        <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="flex items-center gap-2 text-left"
        >
            <span>Phone</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    ),
    enableSorting: true,

},



{
    accessorKey:"country",

    header: ({ column }) => (
        <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="flex items-center gap-2 text-left"
        >
            <span>Country</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    ),
    enableSorting: true,

},




{
    id:"actions",

    header:"Action",

    cell:({row})=>(

        <UserActions

            user={row.original}

            onView={onView}

        />

    )

}



];