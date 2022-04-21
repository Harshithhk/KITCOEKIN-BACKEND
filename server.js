import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import newsAndNoticesRoutes from './routes/newsAndNoticesRoutes.js'


dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.get("/", (req,res)=>{
    res.send('HELLO FROM API')
})

app.use('/api/users',userRoutes)
app.use('/api/newsandnotices',newsAndNoticesRoutes)

const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`Server running on port ${PORT}`))