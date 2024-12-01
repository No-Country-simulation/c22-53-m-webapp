import { Request, Response } from "express";
import { sendEmail } from "../utils/mailer";
import Appointment from "../models/appointmentModel";

export const createAppointment = async (req: Request, res: Response) => {
    const { patientEmail, doctorEmail, date, time } = req.body;

    try {
        const appointment = new Appointment({ patientEmail, doctorEmail, date, time });
        await appointment.save();

        await sendEmail(
            patientEmail,
            "Appointment Scheduled",
            `Your appointment is scheduled for ${date} at ${time}.`
        );

        await sendEmail(
            doctorEmail,
            "New Appointment Scheduled",
            `You have a new appointment scheduled for ${date} at ${time}.`
        );

        res.status(201).json({ message: "Appointment created and emails sent." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; 