import express from "express"
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController"

const router = express.Router()

router.get("/", getCourses)
router.post("/", addCourse)
router.put("/:id", updateCourse)
router.delete("/:id", deleteCourse)

export default router
// import express from "express"
// import {
//   getEnrollments,
//   submitEnrollment,
//   deleteEnrollment
// } from "../controllers/courseController"

// const router = express.Router()

// router.get("/", getEnrollments)
// router.post("/", submitEnrollment)
// router.delete("/:id", deleteEnrollment)

// export default router