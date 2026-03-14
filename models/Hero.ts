import mongoose, { Schema, Document } from "mongoose"

export interface IHero extends Document {
  title: string
  description: string
  phone: string
  imageUrl: string
}

const HeroSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    phone: {
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

export default mongoose.model<IHero>("Hero", HeroSchema)