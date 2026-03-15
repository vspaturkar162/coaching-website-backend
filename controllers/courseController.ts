import { Request, Response } from "express"
import Course from "../models/Course"

// GET ALL COURSES
export const getCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 })
    res.json(courses)
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" })
  }
}

// ADD COURSE
export const addCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name, description, className,
      exam, professor, duration, fees, imageUrl
    } = req.body

    const course = new Course({
      name, description, className,
      exam, professor, duration, fees, imageUrl
    })

    const saved = await course.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ message: "Error adding course" })
  }
}

// UPDATE COURSE
export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const updated = await Course.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: "Error updating course" })
  }
}

// DELETE COURSE
export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    await Course.findByIdAndDelete(id)
    res.json({ message: "Course deleted" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting course" })
  }
}
// import { Request, Response } from "express"
// import Enrollment from "../models/Course"

// // GET ALL ENROLLMENTS (for admin to view)
// export const getEnrollments = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const enrollments = await Enrollment.find().sort({ createdAt: -1 })
//     res.json(enrollments)
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching enrollments" })
//   }
// }

// // SUBMIT ENROLLMENT
// export const submitEnrollment = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { name, phone, email, course } = req.body

//     const enrollment = new Enrollment({ name, phone, email, course })
//     const saved = await enrollment.save()

//     res.status(201).json({
//       message: "Enrollment submitted successfully",
//       data: saved
//     })
//   } catch (error) {
//     res.status(500).json({ message: "Error submitting enrollment" })
//   }
// }

// // DELETE ENROLLMENT
// export const deleteEnrollment = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params
//     await Enrollment.findByIdAndDelete(id)
//     res.json({ message: "Enrollment deleted" })
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting enrollment" })
//   }
// }