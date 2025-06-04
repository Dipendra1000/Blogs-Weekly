import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BlogList from '../components/BlogList'

const CategoryPage = () => {

    const { categoryName } = useParams()
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () =>{
        const res = await axios(`http://localhost:5000/api/blogs/category/${categoryName}`)
        setBlogs(res.data)
    }

    useEffect(() =>{
        getBlogs()
    },[categoryName])

  return (
    <>
      <h2 className='flex justify-center text-[1.5rem] my-5'>{categoryName} Blogs</h2>
      <BlogList posts={blogs} />
    </>
  )
}

export default CategoryPage