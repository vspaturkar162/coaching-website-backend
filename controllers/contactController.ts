import { Request, Response } from "express"
import Contact from "../models/Contact"
import ContactMessage from "../models/ContactMessage"

// GET CONTACT INFO
export const getContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contact = await Contact.findOne()

    if (!contact) {
      res.status(404).json({ message: "Contact info not found" })
      return
    }

    res.json(contact)
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact info" })
  }
}

// SAVE / UPDATE CONTACT INFO
export const saveContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      instituteName, phone, email, whatsapp,
      website, address, mapLink,
      instagram, facebook, youtube
    } = req.body

    let contact = await Contact.findOne()

    if (contact) {
      contact.instituteName = instituteName
      contact.phone = phone
      contact.email = email
      contact.whatsapp = whatsapp
      contact.website = website
      contact.address = address
      contact.mapLink = mapLink
      contact.instagram = instagram
      contact.facebook = facebook
      contact.youtube = youtube

      await contact.save()
      res.json(contact)
      return
    }

    const newContact = new Contact({
      instituteName, phone, email, whatsapp,
      website, address, mapLink,
      instagram, facebook, youtube
    })

    const saved = await newContact.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ message: "Error saving contact info" })
  }
}

// GET ALL MESSAGES (admin view)
export const getMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" })
  }
}

// SUBMIT CONTACT FORM MESSAGE
export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, phone, message } = req.body

    const newMessage = new ContactMessage({ name, email, phone, message })
    const saved = await newMessage.save()

    res.status(201).json({
      message: "Message sent successfully",
      data: saved
    })
  } catch (error) {
    res.status(500).json({ message: "Error sending message" })
  }
}

// DELETE MESSAGE
export const deleteMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    await ContactMessage.findByIdAndDelete(id)
    res.json({ message: "Message deleted" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting message" })
  }
}