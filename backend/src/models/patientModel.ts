import mongoose,{Document} from "mongoose";


export interface IPatient extends Document{
    name: string
    last_name: string
    email:string
    password:string
}


const patientSchema=new mongoose.Schema({

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

const Patient=mongoose.model<IPatient>("Patient",patientSchema)
export default Patient