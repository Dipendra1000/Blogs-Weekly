const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Blog = require('./models/Blog')
const blogRoutes = require('./routes/blogs')

const app = express()

app.use(cors())
app.use('/api/blogs', blogRoutes)

mongoose.connect("mongodb://localhost:27017/data")
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=>console.log("there is some in mongodb : ",err))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("server is running on port :", PORT)
})