import mongoose, { Document } from "mongoose";

export interface IAppointment extends Document {
    patientEmail: string;
    doctorEmail: string;
    date: Date;
    time: string; // could be Date
    notes?: string; // optional field for any additional notes
}

const appointmentSchema = new mongoose.Schema({
    patientEmail: {
        type: String,
        required: true,
        trim: true,
    },
    doctorEmail: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, // automatically manage createdAt and updatedAt fields
});

const Appointment = mongoose.model<IAppointment>("Appointment", appointmentSchema);
export default Appointment; 