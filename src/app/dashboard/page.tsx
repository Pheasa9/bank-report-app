import { redirect } from "next/navigation"

export default function Page(){

   
           const isLogin = true; 
           if(isLogin){
             redirect("/dashboard/overview")    
           }else{
                redirect("/login")
           }
    
    
}