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
    console.error("getCourses error:", error)
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

    // Log incoming data to see what's arriving
    console.log("addCourse body:", req.body)

    const course = new Course({
      name,
      description: description || "",
      className,
      exam: exam || "",
      professor: professor || "",
      duration: duration || "",
      fees: fees || "",
      imageUrl: imageUrl || ""
    })

    const saved = await course.save()
    console.log("Course saved:", saved._id)
    res.status(201).json(saved)
  } catch (error) {
    console.error("addCourse error:", error)  // ← this will show in Render logs
    res.status(500).json({ message: "Error adding course", error: String(error) })
  }
}

// UPDATE COURSE
export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    console.log("updateCourse id:", id, "body:", req.body)

    const updated = await Course.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updated) {
      res.status(404).json({ message: "Course not found" })
      return
    }

    res.json(updated)
  } catch (error) {
    console.error("updateCourse error:", error)
    res.status(500).json({ message: "Error updating course", error: String(error) })
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
    console.error("deleteCourse error:", error)
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