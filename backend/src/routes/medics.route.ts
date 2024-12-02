import { Router } from "express";
import { getMedics, register, uploadFile } from "../controllers/medicsController";
import { authenticate } from "../middlewares/auth";

const router=Router()


router.post("/auth/medic-register",register)
router.post("/profile/files",authenticate,uploadFile)
router.get("/medics",getMedics)
export  {
    router as medicRouter
}