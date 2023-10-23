import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import User from "./models/users.model";
import { connectToDB } from "./mongoose";

type Props = {
    userId: String,
    name: String,
    email: String
}
export async function CreateUser({ userId, name, email }: Props) {
    try {
       connectToDB()
     const CreatedUser = await User.create({
        userId,
        name,
        email,
        isAdmin: true
    }) 
    if(!CreateUser){
        return null
    }else{
        console.log('create user!!')
        console.log('create user!!')
        console.log('create user!!')
        console.log('create user!!')
        console.log('create user!!')
        console.log('create user!!')
    }
    return JSON.stringify(CreateUser)
    } catch (error: any) {
        throw new Error(`authorize error: ${error.message}`);
    }
    
}