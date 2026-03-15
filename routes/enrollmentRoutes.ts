import express from "express"
import {
  getEnrollments,
  submitEnrollment,
  updateEnrollment,
  deleteEnrollment
} from "../controllers/enrollmentController"

const router = express.Router()

router.get("/", getEnrollments)
router.post("/", submitEnrollment)
router.put("/:id", updateEnrollment)
router.delete("/:id", deleteEnrollment)

export default router