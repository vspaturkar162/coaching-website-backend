import mongoose, { Schema, Document } from "mongoose"

export interface IResult extends Document {
  name: string
  className: string
  rank: string
  percentage: string
  imageUrl: string
}

const ResultSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    rank: {
      type: String,
      required: true
    },
    percentage: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model<IResult>("Result", ResultSchema)