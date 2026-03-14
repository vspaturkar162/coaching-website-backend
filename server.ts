import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db"
import heroRoutes from "./routes/heroRoutes"

dotenv.config()

/* CONNECT DATABASE */
connectDB()

/* CREATE EXPRESS APP */
const app = express()

/* MIDDLEWARE */
app.use(cors())
app.use(express.json())

/* ROUTES */
app.use("/api/hero", heroRoutes)

/* SERVER */
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})