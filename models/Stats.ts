import mongoose, { Schema, Document } from "mongoose"

export interface IStats extends Document {
  students: string
  selections: string
  experience: string
  successRate: string
  courses: string
  batches: string
  faculty: string
}

const StatsSchema: Schema = new Schema(
  {
    students: {
      type: String,
      required: true
    },
    selections: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    successRate: {
      type: String,
      required: true
    },
    courses: {
      type: String,
      required: true
    },
    batches: {
      type: String,
      required: true
    },
    faculty: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model<IStats>("Stats", StatsSchema)