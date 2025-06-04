import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ posts }) => {

    return (
        <>
            <div className="flex flex-col gap-[20px] items-center">
                {posts.map((post) => (
                    <div key={post._id} className="flex border border-[#ddd] rounded-xl overflow-hidden w-5/6 last:mb-10">
                        <Link to={post.readMoreUrl}><img src={post.image} alt={post.title} className='w-[165px] object-cover' /></Link>
                        <div className="p-[16px] flex-1">
                            <h3 className='mb-[10px] font-bold'>
                                <Link to={post.readMoreUrl}>{post.title}</Link>
                            </h3>
                            <p>{post.excerpt}</p>
                            <div className="text-[0.8rem] text-[#555] ">
                                <span className='mr-[10px]' >{post.date}</span>
                                <span className='mr-[10px]' >•</span>
                                <Link to={`/author/${post.author}`}>{post.author}</Link>
                                <span className='mr-[10px]' >•</span>
                                <Link to={`/category/${post.category}`}>{post.category}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogList