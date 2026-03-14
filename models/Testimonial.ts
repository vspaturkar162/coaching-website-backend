import mongoose, { Schema, Document } from "mongoose"

export interface ITestimonial extends Document {
  studentName: string
  parentName: string
  videoUrl: string
  description: string
  imageUrl: string
}

const TestimonialSchema: Schema = new Schema(
  {
    studentName: {
      type: String,
      required: true
    },
    parentName: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
)

export default mongoose.model<ITestimonial>(
  "Testimonial",
  TestimonialSchema
)