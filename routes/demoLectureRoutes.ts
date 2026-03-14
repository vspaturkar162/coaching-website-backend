import express from "express"
import {
  getLectures,
  addLecture,
  deleteLecture,
  updateLecture
} from "../controllers/demoLectureController"

const router = express.Router()

router.get("/", getLectures)
router.post("/", addLecture)
router.put("/:id", updateLecture)
router.delete("/:id", deleteLecture)

export default router