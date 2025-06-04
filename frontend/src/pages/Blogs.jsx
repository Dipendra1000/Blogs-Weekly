import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Blogs = () => {

  const [blogs, setBlogs]= useState([])
  
  const getData = async () =>{
    const res = await axios("http://localhost:5000/api/blogs")
    setBlogs(res.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <div className='min-h-[90vh] flex flex-wrap gap-10 items-center justify-center my-10'>
      {blogs.map((blog)=>(
        <div key={blog._id} className="flex flex-col border border-[#ddd] rounded-xl overflow-hidden max-w-[400px] w-[400px] bg-white shadow-md hover:shadow-2xl scale-100 hover:scale-105 duration-300 ease-in-out ">
        <Link to={blog.readMoreUrl}><img src={blog.image} alt="Blog Thumbnail" className='w-full h-[200px] object-cover' /></Link>
        <div className='p-[16px]'>
          <div className='flex justify-between text-[0.85rem] text-[#888] mb-[8px]'>
            <span className='hover:text-[#900]'><Link to={`/category/${blog.category}`} >{blog.category}</Link></span>
            <span>{blog.date}</span>
          </div>
          
            <h3 className='text-[1.2rem] my-[8px] text[#333]'>{blog.title}</h3>
          
            <p className='text-[0.95rem] text-[#555] mb-[16px]'>{blog.excerpt}</p>
          
          <div className='flex justify-between items-center text-[0.9rem]'>
            <span className='hover:text-[#900]'><Link to={`/author/${blog.author}`}>By {blog.author}</Link></span>
            <Link to={blog.readMoreUrl} className='text-decoration-none text-[#0077cc] font-bold hover:underline'>Read more →</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}

export default Blogs