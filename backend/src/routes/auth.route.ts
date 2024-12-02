import { Router } from "express";
import { getUser, login } from "../controllers/authController";
import { authenticate } from "../middlewares/auth";

const router=Router()



router.post("/auth/login",login)
router.get("/auth",authenticate,getUser)


export {
    router as authRouter
}