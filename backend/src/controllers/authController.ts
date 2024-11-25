import { Request,Response } from "express"
import Patient from "../models/patientModel"
import Medic from "../models/medicModel"
import { comparePasswords } from "../utils/hash"

export const login=async(req:Request,res:Response)=>{

        const {email,password}=req.body
    try {
        const patientExists=await Patient.findOne({email})
        const MedicExists=await Medic.findOne({email})


        if(!patientExists && !MedicExists){
            const error=new Error("No existe ningún usuario con ese email")
            res.status(404).json({error:error.message})
            return
        }

        const user=patientExists || MedicExists

        const isCorrectPassword=await comparePasswords(password,user.password)
        if(!isCorrectPassword){
            const error=new Error("Contraseña inválida")
            res.status(404).json({error:error.message})
            return
        }

            // Acá va el jwt //

        res.status(200).json({payload:"Logueado"})
   
    } catch (error) {
        res.status(404).json(error.message)
    }
}