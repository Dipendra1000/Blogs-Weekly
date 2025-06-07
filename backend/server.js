const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

// const Blog = require('./models/Blog')
const blogRoutes = require('./routes/blogs')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=>console.log("there is some in mongodb : ", err))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
console.log("server is running on port :", PORT)
})