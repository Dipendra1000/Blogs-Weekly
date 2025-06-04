const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    excerpt: String,
    date: String,
    category: String,
    author: String,
    readMoreUrl: String,
})

module.exports = mongoose.model("Blog", blogSchema)

