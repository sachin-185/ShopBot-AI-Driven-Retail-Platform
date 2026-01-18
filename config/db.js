import mongoose from 'mongoose';
import dotenv from "dotenv";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

};