import mongoose from "mongoose";

 export async function connectionDB() {
       
     try {
        const {connection}=await mongoose.connect(process.env.URL_DATABASE)
        const url=`${connection.host}:${connection.port}`
        console.log(`MongoDB connected to ${url}`)

     } catch (error) {
        console.log(error.message)
        process.exit(1)
     }  
}

