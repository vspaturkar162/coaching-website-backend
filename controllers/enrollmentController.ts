import { Request, Response } from "express"
import Enrollment from "../models/Enrollment"

// GET ALL ENROLLMENTS (for admin to view)
export const getEnrollments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 })
    res.json(enrollments)
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments" })
  }
}

// SUBMIT ENROLLMENT
export const submitEnrollment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, phone, email, course } = req.body

    const enrollment = new Enrollment({ name, phone, email, course })
    const saved = await enrollment.save()

    res.status(201).json({
      message: "Enrollment submitted successfully",
      data: saved
    })
  } catch (error) {
    res.status(500).json({ message: "Error submitting enrollment" })
  }
}

// DELETE ENROLLMENT
export const deleteEnrollment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    await Enrollment.findByIdAndDelete(id)
    res.json({ message: "Enrollment deleted" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting enrollment" })
  }
}