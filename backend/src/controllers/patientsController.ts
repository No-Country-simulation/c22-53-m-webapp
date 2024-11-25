import { Request,Response } from "express"
import Patient from "../models/patientModel"
import { createHash } from "../utils/hash"
import Medic from "../models/medicModel"


export const register=async(req:Request,res:Response)=>{

        const {email,password}=req.body
    try {
        
        const patientExists=await Patient.findOne({email})
        const medicExists=await Medic.findOne({email})

        if(patientExists || medicExists){
            const error=new Error("Ya existe un usuario con ese email")
            res.status(409).json({message:error.message})
            return
        }
        const patient= new Patient(req.body)
        patient.password=await createHash(password)

       await patient.save()

       res.status(201).json("Usuario registrado correctamente")

    } catch (error) {
        res.status(400).json(error.message)
    }
}