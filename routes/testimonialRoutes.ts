import express from "express"

import {
  getTestimonials,
  addTestimonial,
  deleteTestimonial,
  updateTestimonial
} from "../controllers/testimonialController"

const router = express.Router()

router.get("/", getTestimonials)

router.post("/", addTestimonial)

router.put("/:id", updateTestimonial)

router.delete("/:id", deleteTestimonial)

export default router