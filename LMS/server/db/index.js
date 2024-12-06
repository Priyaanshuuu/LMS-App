import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const dbConnect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`/n MongoDB connected!! DB HOST ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log('There is some error in connecting MongoDB', error);
        
    }
}

export default dbConnect