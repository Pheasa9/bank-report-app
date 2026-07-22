import { User } from "@/types/user";
import { RandomUserResponse } from "@/types/user-response";
import { mapUser } from "@/utils/user.mapper";


export async function getUsers(): Promise<User[]> {


    const response = await fetch(
        "https://randomuser.me/api/?results=20"
    );


    if(!response.ok){

        throw new Error(
            "Failed to fetch users"
        );

    }


    const data:RandomUserResponse =
        await response.json();


    return data.results.map(mapUser);

}