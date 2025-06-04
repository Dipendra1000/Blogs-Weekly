import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BlogList from '../components/BlogList'

const AuthorBlogs = () => {

    const { authorName } = useParams()
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () =>{
        const res = await axios(`http://localhost:5000/api/blogs/author/${authorName}`)
        setBlogs(res.data)
    }

    useEffect(()=>{
        getBlogs()
    },[authorName])


  return (
    <>
        <h2 className='flex justify-center text-[1.5rem] my-5'>Blogs By {authorName}</h2>
        <BlogList posts={blogs} />
    </>
  )
}

export default AuthorBlogs