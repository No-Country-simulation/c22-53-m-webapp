import { Request, Response } from "express"
import Medic from "../models/medicModel"
import { createHash } from "../utils/hash"
import Patient from "../models/patientModel"
import formidable from 'formidable'
import cloudinary from "../config/cloudinary"

export const register = async (req: Request, res: Response) => {


    const { email, password } = req.body
    try {

        const medicExists = await Medic.findOne({ email })
        const patientExists = await Patient.findOne({ email })
        if (medicExists || patientExists) {
            const error = new Error("Ya existe un usuario con ese email")
            res.status(409).json({ message: error.message })
            return
        }
        const medic = new Medic(req.body)
        medic.password = await createHash(password)

        await medic.save()

        res.status(201).json("Usuario registrado correctamente")

    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const uploadFile = async (req: Request, res: Response) => {

    const form = formidable({ multiples: false, maxFileSize: 2 * 1024 * 1024 })

    try {
        form.parse(req, (error, fields, files) => {
            if (error) {
                if (error.code === 'LIMIT_FILE_SIZE') {
                    res.status(400).json({ error: "El tamaño del archivo excede el límite permitido (2 MB)." })
                } else {
                    res.status(500).json({ error: "Hubo un error al procesar el archivo." })
                }
                return
            }
            const file = files.file[0]
            const resourceType = file.mimetype === "application/pdf" ? "raw" : "image"
            const publicId = file.mimetype === "application/pdf" ? `${file.newFilename.split('.')[0]}.pdf` : file.newFilename.split('.')[0]

            cloudinary.uploader.upload(files.file[0].filepath, {public_id:publicId, resource_type: resourceType }, async function (error, result) {
                if (error) {
                    const error = new Error("Hubo un error al subir la imágen")
                    res.status(500).json({ error: error.message })
                    return
                }

                if (result && req.user instanceof Medic) {
                    if (resourceType == "image") {
                        req.user.image = result.secure_url
                        await req.user.save()
                        res.status(201).json("Imagen subida con éxito")
                    } else if (resourceType == "raw") {
                        req.user.cv = result.secure_url
                        await req.user.save()
                        res.status(201).json("Curriculum súbido con éxito")
                    }
                    else {
                        res.status(403).json({ error: "Acción no permitida para este usuario" })
                    }
                }
            })
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const getCV = async (req: Request, res: Response) => {


    try {

        const medics = await Medic.find().select("-password")
        res.json(medics)


    } catch (error) {
        res.status(400).json(error.message)
    }
}



