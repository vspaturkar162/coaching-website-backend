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
    name: { type: String, required: true },        // only these 2 are truly required
    className: { type: String, required: true },
    description: { type: String, default: "" },    // rest are optional
    exam: { type: String, default: "" },
    professor: { type: String, default: "" },
    duration: { type: String, default: "" },
    fees: { type: String, default: "" },
    imageUrl: { type: String, default: "" }
  },
  { timestamps: true }
)

export default mongoose.model<ICourse>("Course", CourseSchema)

// import mongoose, { Schema, Document } from "mongoose"

// export interface ICourse extends Document {
//   name: string
//   phone: string
//   email: string
//   course: string
// }

// const CourseSchema: Schema = new Schema(
//   {
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true },
//     course: { type: String, required: true }
//   },
//   { timestamps: true }
// )

// export default mongoose.model<ICourse>("Enrollment", CourseSchema)