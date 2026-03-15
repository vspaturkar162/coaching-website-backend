import mongoose, { Schema, Document } from "mongoose"

export interface ICourse extends Document {
  name: string
  description: string
  className: string
  exam: string
  professor: string
  duration: string
  fees: string
  imageUrl: string
}

const CourseSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    className: { type: String, required: true },
    exam: { type: String, required: false, default: "" },
    professor: { type: String, required: false, default: "" },
    duration: { type: String, required: false, default: "" },
    fees: { type: String, required: false, default: "" },
    imageUrl: { type: String, required: false, default: "" }
  },
  { timestamps: true }
)

export default mongoose.model<ICourse>("Course", CourseSchema)