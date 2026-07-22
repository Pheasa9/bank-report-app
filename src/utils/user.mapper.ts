import { User } from "@/types/user";


export function mapUser(apiUser:any):User{


return {

    id:apiUser.login.uuid,

    fullname: `${apiUser.name.first} ${apiUser.name.last}`,
    username:
          apiUser.login.username,
    email:
        apiUser.email,

    age:
        apiUser.dob.age,

    gender:
        apiUser.gender,
    
    location:
        apiUser.location.name,

    phone:
        apiUser.phone,


    avatar:
        apiUser.picture.large,


    
    country:
        apiUser.location.country

};


}