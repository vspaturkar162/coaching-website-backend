// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"

// import connectDB from "./config/db"
// import heroRoutes from "./routes/heroRoutes"
// import resultRoutes from "./routes/resultRoutes"
// import testimonialRoutes from "./routes/testimonialRoutes"
// import statsRoutes from "./routes/statsRoutes"

// dotenv.config()

// /* CONNECT DATABASE */
// connectDB()

// /* CREATE EXPRESS APP */
// const app = express()

// /* MIDDLEWARE */
// // app.use(express.json())
// // app.use(
// //   cors({
// //     origin: [
// //       "http://localhost:5173",
// //       "https://coaching-website-frontend-pi.vercel.app"
// //     ],
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     credentials: true
// //   })
// // )

// app.use(cors())

// app.use(express.json())

// /* ROUTES */
// app.use("/api/hero", heroRoutes)
// app.use("/api/results", resultRoutes)
// app.use("/api/testimonials", testimonialRoutes)
// app.use("/api/stats", statsRoutes)

// /* SERVER */
// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db"
import heroRoutes from "./routes/heroRoutes"
import resultRoutes from "./routes/resultRoutes"
import testimonialRoutes from "./routes/testimonialRoutes"
import statsRoutes from "./routes/statsRoutes"

dotenv.config()
connectDB()

const app = express()

// ---- CORS FIX (handles preflight) ----
const allowedOrigins = [
  "http://localhost:5173",
  "https://coaching-website-frontend-pi.vercel.app"
]

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like curl/postman)
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS not allowed"), false)
    }
    return callback(null, true)
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

// Important for preflight requests


// body parser
app.use(express.json())

// ---- ROUTES ----
app.use("/api/hero", heroRoutes)
app.use("/api/results", resultRoutes)
app.use("/api/testimonials", testimonialRoutes)
app.use("/api/stats", statsRoutes)

app.get("/", (req, res) => {
  res.send("API running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})