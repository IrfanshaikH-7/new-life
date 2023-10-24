"use server"
import User from "./models/users.model";
import { connectToDB } from "./mongoose";

type Props = {
    userId: String,
    name: String,
    email: String,
}
export async function CreateUser({ userId, name, email }: Props) {
    try {
       connectToDB()
     const CreatedUser = await User.create({
        userId,
        name,
        email,
        isAdmin: false
    }) 
    if(!CreateUser){
        return null
    }else{
        console.log('create user!!')
    }
    return JSON.stringify(CreateUser)
    } catch (error: any) {
        throw new Error(`authorize error: ${error.message}`);
    }
    
}
type getProps = {
    userId : string
}
export async function GetUser({userId}: getProps) {
    try {
       connectToDB()
     const user = await User.findOne({
        userId,
    })
    if(!user){
        return false
    }else{
        
        return true
    }
    } catch (error: any) {
        throw new Error(`authorize error: ${error.message}`);
    }
    
}


type isAdminProps = {
    userId : string
}
export async function isAdmin({userId}: isAdminProps) {
    try {
       connectToDB()
     const user = await User.findOne({
        userId: userId,
        where: {
            isAdmin: true
        }
    })
    if(user.isAdmin === false){
        return false
    }
    return true
    
    } catch (error: any) {
        throw new Error(`authorize error: ${error.message}`);
    }
    
}