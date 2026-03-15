import mongoose, { Schema, Document } from "mongoose"

export interface IContact extends Document {
  instituteName: string
  phone: string
  email: string
  whatsapp: string
  website: string
  address: string
  mapLink: string
  instagram: string
  facebook: string
  youtube: string
}

const ContactSchema: Schema = new Schema(
  {
    instituteName: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    whatsapp: { type: String, default: "" },
    website: { type: String, default: "" },
    address: { type: String, default: "" },
    mapLink: { type: String, default: "" },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    youtube: { type: String, default: "" }
  },
  { timestamps: true }
)

export default mongoose.model<IContact>("Contact", ContactSchema)