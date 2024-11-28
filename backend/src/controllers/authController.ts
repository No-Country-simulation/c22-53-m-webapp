import { Request, Response } from "express"
import Patient from "../models/patientModel"
import Medic from "../models/medicModel"
import { comparePasswords } from "../utils/hash"
import { generateJWT } from "../utils/jwt"


export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body
    try {
        const patientExists = await Patient.findOne({ email })
        const MedicExists = await Medic.findOne({ email })


        if (!patientExists && !MedicExists) {
            const error = new Error("No existe ningún usuario con ese email")
            res.status(404).json({ error: error.message })
            return
        }

        const user = patientExists || MedicExists

        const isCorrectPassword = await comparePasswords(password, user.password)
        if (!isCorrectPassword) {
            const error = new Error("Contraseña inválida")
            res.status(404).json({ error: error.message })
            return
        }

        // Acá va el jwt //
        const token = generateJWT({ id: user._id })

        res.status(200).json(token)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const getUser = async (req: Request, res: Response) => {

    const user=req.user

    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
   

}