"use client"

import { User } from "@/types/user"

import {
    ColumnDef
} from "@tanstack/react-table"

import Image from "next/image"

import { ArrowUpDown } from "lucide-react"

import { UserActions } from "./user-actions"



export const columns = (
    {
        onView
    }: {
        onView?: (user: User) => void
    }

): ColumnDef<User>[] => [


    {
        id: "avatar",

        accessorKey: "avatar",

        header: "Avatar",

        enableHiding: true,

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
        id: "fullname",

        accessorKey: "fullname",

        header: ({ column }) => (

            <button

                type="button"

                onClick={
                    column.getToggleSortingHandler()
                }

                className="flex items-center gap-2 text-left"

            >

                <span>
                    Full Name
                </span>

                <ArrowUpDown className="h-4 w-4" />

            </button>

        ),

        enableSorting: true,

        enableHiding: true,

    },



    {
        id: "username",

        accessorKey: "username",

        header: ({ column }) => (

            <button

                type="button"

                onClick={
                    column.getToggleSortingHandler()
                }

                className="flex items-center gap-2 text-left"

            >

                <span>
                    Username
                </span>

                <ArrowUpDown className="h-4 w-4" />

            </button>

        ),

        enableSorting: true,

        enableHiding: true,

    },



    {
        id: "email",

        accessorKey: "email",

        header: ({ column }) => (

            <button

                type="button"

                onClick={
                    column.getToggleSortingHandler()
                }

                className="flex items-center gap-2 text-left"

            >

                <span>
                    Email
                </span>

                <ArrowUpDown className="h-4 w-4" />

            </button>

        ),

        enableSorting: true,

        enableHiding: true,

    },



    {
        id: "phone",

        accessorKey: "phone",

        header: ({ column }) => (

            <button

                type="button"

                onClick={
                    column.getToggleSortingHandler()
                }

                className="flex items-center gap-2 text-left"

            >

                <span>
                    Phone
                </span>

                <ArrowUpDown className="h-4 w-4" />

            </button>

        ),

        enableSorting: true,

        enableHiding: true,

    },



    {
        id: "country",

        accessorKey: "country",

        header: ({ column }) => (

            <button

                type="button"

                onClick={
                    column.getToggleSortingHandler()
                }

                className="flex items-center gap-2 text-left"

            >

                <span>
                    Country
                </span>

                <ArrowUpDown className="h-4 w-4" />

            </button>

        ),

        enableSorting: true,

        enableHiding: true,

    },



    {
        id: "actions",

        header: "Action",

        enableHiding: false,

        cell: ({ row }) => (

            <UserActions

                user={row.original}

                onView={onView}

            />

        )

    }


]