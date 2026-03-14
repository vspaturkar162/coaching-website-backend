import express from "express"

import {
  getStats,
  saveStats
} from "../controllers/statsController"

const router = express.Router()

router.get("/", getStats)

router.post("/", saveStats)

export default router