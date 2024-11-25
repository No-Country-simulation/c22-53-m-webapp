import { Request,Response } from "express"
import Medic from "../models/medicModel"
import { createHash } from "../utils/hash"
import Patient from "../models/patientModel"

export const register=async(req:Request,res:Response)=>{

    
    const {email,password}=req.body
    try {
        
        const medicExists=await Medic.findOne({email})
        const patientExists=await Patient.findOne({email})
        if(medicExists ||  patientExists ){
            const error=new Error("Ya existe un usuario con ese email")
            res.status(409).json({message:error.message})
            return
        }
        const medic= new Medic(req.body)
        medic.password=await createHash(password)

       await medic.save()

       res.status(201).json("Usuario registrado correctamente")

    } catch (error) {
        res.status(400).json(error.message)
    }
}