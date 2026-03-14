import { Request, Response } from "express"
import Result from "../models/Result"

// GET ALL RESULTS
export const getResults = async (req: Request, res: Response) => {
  try {

    const results = await Result.find().sort({ className: 1, rank: 1 })

    res.json(results)

  } catch (error) {

    res.status(500).json({ message: "Error fetching results" })

  }
}


// ADD RESULT
export const addResult = async (req: Request, res: Response) => {
  try {

    const { name, className, rank, percentage, imageUrl } = req.body

    const newResult = new Result({
      name,
      className,
      rank,
      percentage,
      imageUrl
    })

    const saved = await newResult.save()

    res.status(201).json(saved)

  } catch (error) {

    res.status(500).json({ message: "Error adding result" })

  }
}


// DELETE RESULT
export const deleteResult = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    await Result.findByIdAndDelete(id)

    res.json({ message: "Result deleted" })

  } catch (error) {

    res.status(500).json({ message: "Error deleting result" })

  }
}


// UPDATE RESULT
export const updateResult = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const updated = await Result.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )

    res.json(updated)

  } catch (error) {

    res.status(500).json({ message: "Error updating result" })

  }
}