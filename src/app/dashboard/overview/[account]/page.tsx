"use client"
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){
     

    const params = useParams<{ account: string}>()
    const pathName = usePathname();
    const serchParams = useSearchParams();

    return(

    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-600">
        From  : {params.account} Page
        <h1>
          This is Pathname : {pathName}
        </h1>
        <h1>
          this is SearchParams  Id : {serchParams.get("id")}
          
        </h1>
        <h1>
          this is SearchParams tag : {serchParams.get("tag")}
        </h1>


  
      </h1>
    </main>

    )
}