import { Router } from "express";
import { register } from "../controllers/patientsController";

const router=Router()


router.post("/auth/patient-register",register)

export {
    router as patientRouter
}