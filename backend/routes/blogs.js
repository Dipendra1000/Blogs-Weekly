const express = require('express')
const Blog = require('../models/Blog')
const router = express.Router()


router.get("/", async(req, res)=>{
    const blogs = await Blog.find()
    res.json(blogs)
})

router.get("/:slug", async(req, res)=>{
    try{
        const blog = await Blog.findOne({readMoreUrl : `/blog/${req.params.slug}`})
        if(!blog) return res.status(404).json({message: "Blog not found"})
        res.json(blog)
    }
    catch(err){
        res.status(500).json({message: "Server error"})
    }
})

router.get("/category/:categoryName", async(req, res)=>{
    try{
        const blogs = await Blog.find({category: req.params.categoryName})
        res.json(blogs)
    }
    catch(err){
        res.status(500).json({message: "Server error"})
    }
})

router.get("/author/:authorName", async(req, res)=>{
    try{
        const blogs = await Blog.find({author: req.params.authorName})
        res.json(blogs)
    }
    catch(err){
        res.status(500).json({message: "Server error"})
    }
})

module.exports = router