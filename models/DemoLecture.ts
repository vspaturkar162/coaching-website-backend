import mongoose, { Schema, Document } from "mongoose"

export interface IDemoLecture extends Document {
  title: string
  subject: string
  teacher: string
  className: string
  videoUrl: string
  thumbnail: string
}

const DemoLectureSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    teacher: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: false,
      default: ""
    }
  },
  { timestamps: true }
)

export default mongoose.model<IDemoLecture>("DemoLecture", DemoLectureSchema)