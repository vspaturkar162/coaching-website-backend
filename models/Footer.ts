import mongoose, { Schema, Document } from "mongoose"

export interface IFooter extends Document {
  address: string
  phone1: string
  phone2: string
  email: string
  instagram: string
  youtube: string
  facebook: string
  linkedin: string
}

const FooterSchema: Schema = new Schema(
  {
    address: { type: String, default: "" },
    phone1: { type: String, default: "" },
    phone2: { type: String, default: "" },
    email: { type: String, default: "" },
    instagram: { type: String, default: "" },
    youtube: { type: String, default: "" },
    facebook: { type: String, default: "" },
    linkedin: { type: String, default: "" }
  },
  { timestamps: true }
)

export default mongoose.model<IFooter>("Footer", FooterSchema)