import {Request,Response, NextFunction } from "express"
import  jwt from "jsonwebtoken"
import Patient, { IPatient } from "../models/patientModel"
import Medic, { IMedic } from "../models/medicModel"

declare global{
    namespace Express{
        interface Request{
            user?:IMedic |  IPatient
        }
    }
}


export const authenticate=async (req: Request, res: Response,next:NextFunction) =>{
  
    const bearer = req.headers.authorization
    if (!bearer) {
        const error = new Error("Usuario no autenticado")
        res.status(401).json({ error: error.message })
        return
    }
    const [, token] = bearer.split(" ")
    if (!token) {
        const error = new Error("Usuario no autenticado")
        res.status(401).json({ error: error.message })
        return
    }
    try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    if(typeof decoded == "object" && decoded.id){
        const patient= await Patient.findById(decoded.id).select("-password")
        const medic=await Medic.findById(decoded.id).select("-password")
        const user= patient ? patient : medic
        if (!user) {
            const error = new Error("El usuario no existe")
            res.status(404).json({ error: error.message })
            return
        }
        req.user=user
        next()
    }
  

 } catch (error) {
    
    res.status(400).json({ error: "Token inválido" })
 
   
 }
}