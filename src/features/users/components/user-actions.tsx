"use client";


import { User } from "@/types/user";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2
} from "lucide-react";




interface Props {
  user: User;
  onView?: (user: User) => void;
}



export function UserActions({
  user,
  onView
}: Props) {


  return (

    <DropdownMenu>

      <DropdownMenuTrigger
        className="
                flex h-8 w-8
                items-center
                justify-center
                rounded-md
                hover:bg-accent
                "
      >

        <MoreHorizontal
          className="h-4 w-4"
        />

      </DropdownMenuTrigger>



      <DropdownMenuContent align="end">


        <DropdownMenuItem
          onClick={() => {
            onView?.(user)
          }}
        >
          <Eye className="mr-2 h-4 w-4" />

          View Detail
        </DropdownMenuItem>



        <DropdownMenuItem
          onClick={() =>
            console.log("Edit", user.id)
          }
        >
          <Pencil className="mr-2 h-4 w-4" />

          Edit
        </DropdownMenuItem>



        <DropdownMenuItem
          onClick={() =>
            console.log("Delete", user.id)
          }
          className="text-red-500"
        >
          <Trash2 className="mr-2 h-4 w-4" />

          Delete
        </DropdownMenuItem>


      </DropdownMenuContent>

    </DropdownMenu>

  );
}