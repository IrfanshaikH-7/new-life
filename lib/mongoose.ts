import mongoose from "mongoose";

let isConnected = false ; //Variable to check if mongose is connected or not

export const connectToDB = async ()=> {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGO_DB_URL) return console.log('MONGO_DB_URL not found');

    if(isConnected) return console.log("Already Connnected to MONGO DB")

    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        isConnected = true;
        console.log("Connected to MONGO DB") 

    }catch(error){
        console.log(error)
    }
}