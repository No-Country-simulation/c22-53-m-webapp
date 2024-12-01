import express from "express"
import { config } from "dotenv"
import { connectionDB } from "./config/db"
import morgan from "morgan"
import cors from "cors"
import { corsConfig } from "./config/cors"
import { patientRouter } from "./routes/patients.route"
import { medicRouter } from "./routes/medics.route"
import { authRouter } from "./routes/auth.route"
import appointmentRouter from "./routes/appointment.route"
const server = express()

// environment variables //
config()


// midlewares //
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(morgan("dev"))
server.use(cors())
// routes //
server.use("/api", patientRouter)
server.use("/api", medicRouter)
server.use("/api", authRouter)
server.use("/api", appointmentRouter)

// database connection //
connectionDB()

export default server