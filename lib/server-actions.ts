"use server"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { connectToDB  } from "./mongoose";
import Admin from "./models/admin";
import { revalidatePath } from "next/cache";

export const addAdmin = async({username, password, path}: Params) => {
    try {
        connectToDB();

        const createAdmin = await Admin.create({
            username: username,
            password: password,

        })
        revalidatePath(path);
        
    } catch (error: any) {
        throw new Error(`Add admin error: ${error.message}`);
    }
}
export const authorizeAdmin = async({username, password}: Params) => {
    try {
        connectToDB();

        const admin = await Admin.findOne({
            username: username,

        })
        if(!admin){
            throw new Error(`userName not found`);
        }
        if(admin.password !== password){
            throw new Error(`Incorrect password or username`);
        }

        return true
    } catch (error: any) {
        throw new Error(`authorize error: ${error.message}`);
    }
}
