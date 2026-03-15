import { Request, Response } from "express"
import Footer from "../models/Footer"

// GET FOOTER DATA
export const getFooter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const footer = await Footer.findOne()

    if (!footer) {
      res.status(404).json({ message: "Footer data not found" })
      return
    }

    res.json(footer)
  } catch (error) {
    res.status(500).json({ message: "Error fetching footer data" })
  }
}

// SAVE / UPDATE FOOTER
export const saveFooter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      address, phone1, phone2, email,
      instagram, youtube, facebook, linkedin
    } = req.body

    let footer = await Footer.findOne()

    if (footer) {
      footer.address = address
      footer.phone1 = phone1
      footer.phone2 = phone2
      footer.email = email
      footer.instagram = instagram
      footer.youtube = youtube
      footer.facebook = facebook
      footer.linkedin = linkedin

      await footer.save()
      res.json(footer)
      return
    }

    const newFooter = new Footer({
      address, phone1, phone2, email,
      instagram, youtube, facebook, linkedin
    })

    const saved = await newFooter.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ message: "Error saving footer data" })
  }
}