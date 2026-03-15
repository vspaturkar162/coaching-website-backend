import express from "express"
import {
  getContact,
  saveContact,
  getMessages,
  sendMessage,
  deleteMessage
} from "../controllers/contactController"

const router = express.Router()

// Contact info routes
router.get("/", getContact)
router.post("/", saveContact)

// Contact form message routes
router.get("/messages", getMessages)
router.post("/messages", sendMessage)
router.delete("/messages/:id", deleteMessage)

export default router