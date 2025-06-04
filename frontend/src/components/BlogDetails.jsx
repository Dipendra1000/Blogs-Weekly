import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import axios from 'axios'

const BlogDetails = () => {

    const { slug } = useParams()
    const [post, setPost] = useState(null)

    const getBlog = async() =>{
        const res = await axios(`http://localhost:5000/api/blogs/${slug}`)
        setPost(res.data)
    }

    useEffect(()=>{
        getBlog()
    },[slug])

    if (!post) return <p className="text-center my-10 text-gray-500">Loading...</p>;

  return (
   <div className="max-w-3xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-sm text-gray-600 mb-6 flex flex-wrap gap-2">
        <span>
          By <Link to={`/author/${post.author}`} className="text-blue-600 hover:underline">{post.author}</Link>
        </span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <Link to={`/category/${post.category}`} className="text-blue-600 hover:underline">{post.category}</Link>
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="w-full max-h-[400px] object-cover rounded-lg mb-8 shadow"
      />

      <div className="prose prose-lg max-w-none text-gray-800">
        {/* Post content */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quas ad. Tenetur, modi nostrum? Hic cupiditate 
          ratione sed, sint repudiandae necessitatibus vitae fugiat itaque harum commodi quis illo corrupti laboriosam obcaecati. 
          Sequi velit nam accusantium odit, cumque ipsa dolore reiciendis.
        </p>
        <p>{post.excerpt}</p>
      </div>

      {/* {post.tags?.length > 0 && (
        <div className="mt-10">
          <h4 className="font-semibold mb-2 text-gray-700">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link
                to={`/tag/${tag}`}
                key={tag}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </div>
  )
}

export default BlogDetails