import mongoose, { Document } from "mongoose";

interface IMedic extends Document{
    name: string
    last_name: string
    email:string
    password:string
}



const medicSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true
    },
    last_name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }

})

const Medic=mongoose.model<IMedic>("Medic",medicSchema)
export default Medic