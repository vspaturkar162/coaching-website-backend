import express from "express"

import {
  getResults,
  addResult,
  deleteResult,
  updateResult
} from "../controllers/resultController"

const router = express.Router()

router.get("/", getResults)

router.post("/", addResult)

router.delete("/:id", deleteResult)

router.put("/:id", updateResult)

export default router