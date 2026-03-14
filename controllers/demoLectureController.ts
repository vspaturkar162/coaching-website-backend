import { Request, Response } from "express"
import DemoLecture from "../models/DemoLecture"

// GET ALL LECTURES
export const getLectures = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const lectures = await DemoLecture.find().sort({ createdAt: -1 })
    res.json(lectures)
  } catch (error) {
    res.status(500).json({ message: "Error fetching lectures" })
  }
}

// ADD LECTURE
export const addLecture = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, subject, teacher, className, videoUrl, thumbnail } = req.body

    const lecture = new DemoLecture({
      title,
      subject,
      teacher,
      className,
      videoUrl,
      thumbnail
    })

    const saved = await lecture.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ message: "Error adding lecture" })
  }
}

// DELETE LECTURE
export const deleteLecture = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    await DemoLecture.findByIdAndDelete(id)
    res.json({ message: "Lecture deleted" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting lecture" })
  }
}

// UPDATE LECTURE
export const updateLecture = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const updated = await DemoLecture.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: "Error updating lecture" })
  }
}