"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};


export const columns: ColumnDef<Payment>[] = [

  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <img
          src={imageUrl}
          alt="Payment"
          className="h-16 w-16 rounded-md object-cover"
        />
      );
    }
  },


  {
    accessorKey: "id",
    header: "ID",
  },


  {
    accessorKey: "email",
    header: "Email",
  },


  {
    accessorKey: "amount",
    header: "Amount",

    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;

      return `$${amount.toFixed(2)}`;
    },
  },


  {
    id: "actions",

    cell: ({ row }) => {

      const payment = row.original;


      return (

        <DropdownMenu>


          <DropdownMenuTrigger>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                hover:bg-accent
                cursor-pointer
              "
            >

              <span className="sr-only">
                Open menu
              </span>

              <MoreHorizontal className="h-4 w-4" />

            </span>

          </DropdownMenuTrigger>



          <DropdownMenuContent align="end">


            <DropdownMenuGroup>

              <DropdownMenuLabel>
                Actions
              </DropdownMenuLabel>


              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(payment.id)
                }
              >
                Copy payment ID
              </DropdownMenuItem>


              <DropdownMenuSeparator />


              <DropdownMenuItem>
                View customer
              </DropdownMenuItem>


              <DropdownMenuItem>
                View payment details
              </DropdownMenuItem>


            </DropdownMenuGroup>


          </DropdownMenuContent>


        </DropdownMenu>

      );
    },
  },

];