import express from "express"
import { getFooter, saveFooter } from "../controllers/footerController"

const router = express.Router()

router.get("/", getFooter)
router.post("/", saveFooter)

export default router