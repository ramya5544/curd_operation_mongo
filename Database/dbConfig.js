import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectDB=async()=>{
    try{
        const mongoURL=process.env.MONGODBCONNECTIONSTRING
        const connection=await mongoose.connect(mongoURL)
        console.log("connected to the MongoDB");
        return connection;
    }
    catch(err){
console.log("Error",err)
    }
    
}

export default connectDB;