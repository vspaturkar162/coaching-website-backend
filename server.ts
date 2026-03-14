import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db"
import heroRoutes from "./routes/heroRoutes"
import resultRoutes from "./routes/resultRoutes"
import testimonialRoutes from "./routes/testimonialRoutes"
import statsRoutes from "./routes/statsRoutes"

dotenv.config()

/* CONNECT DATABASE */
connectDB()

/* CREATE EXPRESS APP */
const app = express()

/* MIDDLEWARE */
// app.use(express.json())
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://coaching-website-frontend-pi.vercel.app"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
//   })
// )

app.use(cors())

app.use(express.json())

/* ROUTES */
app.use("/api/hero", heroRoutes)
app.use("/api/results", resultRoutes)
app.use("/api/testimonials", testimonialRoutes)
app.use("/api/stats", statsRoutes)

/* SERVER */
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})