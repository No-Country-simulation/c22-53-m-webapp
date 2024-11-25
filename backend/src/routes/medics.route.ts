import { Router } from "express";
import { register } from "../controllers/medicsController";

const router=Router()


router.post("/auth/medic-register",register)

export  {
    router as medicRouter
}