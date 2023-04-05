import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

import connectDB from "./config/db.js"

import userRoutes from "./routes/userRoutes.js"
import newsAndEventsRoutes from "./routes/newsAndEventsRoutes.js"
import noticeRoutes from "./routes/noticesRoutes.js"
import timeTableRoutes from "./routes/timeTableRoutes.js"
import techingStaffRoutes from "./routes/techingStaffRoutes.js"
import departmentRoutes from "./routes/departmentRoutes.js"
import alumniRoutes from "./routes/alumniRoutes.js"

dotenv.config()

console.log(process.env.MODE)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("HELLO FROM API")
})

app.use("/api/users", userRoutes)
app.use("/api/newsandevents", newsAndEventsRoutes)
app.use("/api/notices", noticeRoutes)
app.use("/api/timetable", timeTableRoutes)
app.use("/api/department", departmentRoutes)
app.use("/api/alumni", alumniRoutes)
app.use("/api/teachingstaff", techingStaffRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
