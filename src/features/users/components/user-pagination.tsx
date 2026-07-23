"use client"

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"



interface Props {

    pageIndex: number

    pageCount: number

    canPrevious: boolean

    canNext: boolean

    previousPage: () => void

    nextPage: () => void

}





export function UserPagination({

    pageIndex,

    pageCount,

    canPrevious,

    canNext,

    previousPage,

    nextPage,

}: Props) {



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

                    onClick={previousPage}

                    disabled={!canPrevious}

                >

                    <ChevronLeft className="h-4 w-4" />

                    Previous


                </Button>






                <Button

                    variant="outline"

                    size="sm"

                    onClick={nextPage}

                    disabled={!canNext}

                >

                    Next

                    <ChevronRight className="h-4 w-4" />


                </Button>


            </div>


        </div>

    )

}