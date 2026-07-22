"use client";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { Icons } from "@/components/icons";


import { User } from "@/types/user";



type UserActionsProps = {
    user: User;
};



export function UserActions({
    user

}: UserActionsProps) {


    return (

        <DropdownMenu>


            <DropdownMenuTrigger asChild>

                <button
                    className="
                    flex h-8 w-8
                    items-center
                    justify-center
                    rounded-md
                    hover:bg-accent
                    "
                >

                    <span className="sr-only">
                        Open menu
                    </span>


                    <Icons.moreHorizontal
                        className="h-4 w-4"
                    />


                </button>


            </DropdownMenuTrigger>



            <DropdownMenuContent align="end">


                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>


                <DropdownMenuSeparator />


                <DropdownMenuItem
                    onClick={() => {

                        console.log(
                            "View user",
                            user
                        );

                    }}
                >

                    View

                </DropdownMenuItem>



                <DropdownMenuItem
                    onClick={() => {

                        console.log(
                            "Edit user",
                            user.id
                        );

                    }}
                >

                    Edit

                </DropdownMenuItem>



                <DropdownMenuItem
                    className="text-red-500"
                    onClick={() => {

                        console.log(
                            "Delete user",
                            user.id
                        );

                    }}
                >

                    Delete

                </DropdownMenuItem>



            </DropdownMenuContent>


        </DropdownMenu>

    );

}