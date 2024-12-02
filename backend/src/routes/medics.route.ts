import { Router } from "express";
import { getCV, register, uploadFile } from "../controllers/medicsController";
import { authenticate } from "../middlewares/auth";

const router=Router()


router.post("/auth/medic-register",register)
router.post("/profile/files",authenticate,uploadFile)
router.get("/medics/cv",getCV)
export  {
    router as medicRouter
}