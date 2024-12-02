import mongoose, { Document } from "mongoose";

export interface IMedic extends Document{
    name: string
    last_name: string
    email:string
    password:string
    image:string
    cv:string
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
    },
    image:{
        type:String,
        default:""
    },
    cv:{
        type:String,
        default:""
    }

})

const Medic=mongoose.model<IMedic>("Medic",medicSchema)
export default Medic