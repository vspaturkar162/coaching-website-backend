import mongoose, { Schema, Document } from "mongoose"

export interface IEnrollment extends Document {
  name: string
  phone: string
  email: string
  course: string
}

const EnrollmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model<IEnrollment>("Enrollment", EnrollmentSchema)