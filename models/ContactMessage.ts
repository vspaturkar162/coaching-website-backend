import mongoose, { Schema, Document } from "mongoose"

export interface IContactMessage extends Document {
  name: string
  email: string
  phone: string
  message: string
}

const ContactMessageSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model<IContactMessage>(
  "ContactMessage",
  ContactMessageSchema
)