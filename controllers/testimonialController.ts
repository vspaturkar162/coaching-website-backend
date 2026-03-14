import { Request, Response } from "express"
import Testimonial from "../models/Testimonial"


// GET ALL TESTIMONIALS
export const getTestimonials = async (
  req: Request,
  res: Response
) => {

  try {

    const testimonials = await Testimonial.find().sort({ createdAt: -1 })

    res.json(testimonials)

  } catch (error) {

    res.status(500).json({
      message: "Error fetching testimonials"
    })

  }

}


// ADD TESTIMONIAL
export const addTestimonial = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      studentName,
      parentName,
      videoUrl,
      description,
      imageUrl
    } = req.body

    const newTestimonial = new Testimonial({
      studentName,
      parentName,
      videoUrl,
      description,
      imageUrl
    })

    const saved = await newTestimonial.save()

    res.status(201).json(saved)

  } catch (error) {

    res.status(500).json({
      message: "Error adding testimonial"
    })

  }

}


// DELETE TESTIMONIAL
export const deleteTestimonial = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params

    await Testimonial.findByIdAndDelete(id)

    res.json({
      message: "Testimonial deleted"
    })

  } catch (error) {

    res.status(500).json({
      message: "Error deleting testimonial"
    })

  }

}


// UPDATE TESTIMONIAL
export const updateTestimonial = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params

    const updated = await Testimonial.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )

    res.json(updated)

  } catch (error) {

    res.status(500).json({
      message: "Error updating testimonial"
    })

  }

}