"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"


const VisibleDropdownContext = React.createContext<{
    refresh: number
}>({
    refresh: 0,
})



function VisibleDropdownMenu({
    children,
}: {
    children: React.ReactNode
}) {

    const [refresh, setRefresh] = React.useState(0)


    return (

        <VisibleDropdownContext.Provider
            value={{
                refresh
            }}
        >

            <div className="relative inline-block">

                {children}

            </div>

        </VisibleDropdownContext.Provider>

    )
}







function VisibleDropdownMenuTrigger({

    children,

    onClick,

}: {

    children: React.ReactNode

    onClick?: () => void

}) {


    return (

        <button
    type="button"
    onClick={onClick}
    className={cn(buttonVariants({
        variant: "outline",
        size: "sm",
    }))}
>
    {children}
</button>

    )

}








function VisibleDropdownMenuContent({

    open,

    children,

}: {

    open: boolean

    children: React.ReactNode

}) {


    if (!open) {

        return null

    }


    return (

        <div

            className="
                absolute
                right-0
                z-50
                mt-2
                w-[200px]
                rounded-md
                border
                bg-popover
                p-1
                shadow-md
            "

        >

            {children}

        </div>

    )

}









function VisibleDropdownMenuCheckboxItem({

    checked,

    onClick,

    children,

}: {

    checked: boolean

    onClick: () => void

    children: React.ReactNode

}) {


    console.log(
        "COLUMN CHECK:",
        children,
        "VISIBLE:",
        checked
    )


    return (

        <button

            type="button"

            onClick={onClick}

            className={cn(
                "flex w-full items-center justify-between rounded-md px-2 py-2 text-sm capitalize hover:bg-accent cursor-pointer"
            )}

        >

            <span>
                {children}
            </span>


            {
                checked ? (

                    <Eye
                        className="h-4 w-4"
                    />

                ) : (

                    <EyeOff
                        className="h-4 w-4 opacity-50"
                    />

                )
            }


        </button>

    )

}








export {
    VisibleDropdownMenu,
    VisibleDropdownMenuTrigger,
    VisibleDropdownMenuContent,
    VisibleDropdownMenuCheckboxItem,
}