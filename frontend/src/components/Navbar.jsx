import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";


const Navbar = () => {

  const [query, setQuery] = useState("")
  const [blogs, setBlogs] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [maxResults] = useState(4)

  const getBlogs = async () => {
    const res = await axios("http://localhost:5000/api/blogs")
    setBlogs(res.data)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const handleSearch = () =>{
    setShowSearch(!showSearch)
    setQuery("")
  }

  const searchBlogs = blogs.filter((blog) => {
    const q = query.toLowerCase()
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.excerpt.toLowerCase().includes(q) ||
      blog.author.toLowerCase().includes(q) ||
      blog.category.toLowerCase().includes(q)
    )
  })

  const displayedBlogs = searchBlogs.slice(0, maxResults)

  return (
    <nav className='flex h-20 bg-gray-800 text-white justify-around items-center'>
     
        <Link to="/"><img className='w-[60px] rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADy8vLi4uLV1dWkpKRPT0/7+/tBQUHNzc2wsLAfHx88PDxkZGTp6elgYGCJiYmZmZnAwMDHx8coKCiQkJDc3NwJCQlaWlp4eHhVVVU+Pj4SEhJpaWkdHR1ISEgzMzOCgoKtra16enqhoaEXFxdvb2+NjY0uLi4mJib4QRiuAAAE5UlEQVR4nO2c24KqIBSGQ+1gTVbOdJzO4zS793/B7QJUQGoudoK1/+9KAcVfYcFaUJ0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC2EISuCZzqOw+YewZnZ/qSDw/6iI/EkUBP+gg3EqmFTuLANfEkr3fgQmCaVzR3UVGNeV5z6qCeMWM9B9XY6DE2dlDNiLGhg2psDBkbOagmbyqRg2psRHndDqqBwgaBwgcBhQ0ChQ8CChukdQr7d7LCKLrp0wa3Mj0pDHtvJZO5kjVnH/ZXEXQPwhcazOreUJDJzD/r2MzzpPCP7sEdQpke5iefthvM1eInI3OmZn4ab8iPwn7NS5W5cX64r1+eGG9kGyqZwZtxr652rUeFspFexTOLDFJY9wSSLS8z2k2nY3HIFmVm8M0T9pef6UVGSrSLPSosbMqC9yHhpVoV9vdU4EP6sSk/W5ZGhce39jIzWlFJ7WqPCivDR88sIgBWhWsqvasuJhVsIs94B1W863R0XGhXt0LhqbQeNoULKrxRUw5Vzw14e79XdSsUfpXmwaZwrRfuSFnio871TmmhFQq/y6e0KOxvWW18OJXXk225H4Zpg6UhW3ERxxaFkeUr8TQa25PKSN3Co8LNiujxoW4l5VoUDtW3odyPUbz+XW0MSRwRcagVbceIvy4yLAqzPOlo3o8G+VlHxGGL54/L283Uou1QyAbKnMaisGYsPy0K19Xt1KI+W6mgJyYiYo3IovDMyhlPxV5a31RppWmlUG3ULbA0nYS/fd57LArjMrMiKSwNHyuLOy/eiRYpVIa4S376RQcWhUGtZ3U63fJ6Ovgxq2qhwriwJrYRf1M3pjRErvjROD9aapntVEhPwefLNoW8f13UlCmliFGQN8ovo6oWKpze+4bccKpNkTu8xaIgdy0yvaq2KKweIys/BCm8mheH3D5upLVJxky1PdzWsF3xuqLPFo0WpynnNBFOLZ+YkcLlblwwET6VHAc2szTNJuK4mqmdRcKu+x4Pf478WFuqbMmIXzS02EwWRjQ1k9Wp6NnMvGqhKk+RqJpAuX66MNOlhQm1WMxBj7ZFehTHGFk8KVQ/yna0G5Z98qQL3JdDfboq0sa1gGEn3RSZg645SfcVEe5X+yX0R9L3Umg58TDLhpE9ZCwyY0tIuHUx74cDhQ8CChsECh8EFDYIFD6I/0Jhfa7lhtiNwrfahNgZs19Wbh7EVF3xc0qwZGzqoB5y04+OtpRrJOQTh7+X+3d+uLM3s3bG/rnbEBmFKY1oY2PI6IPNoh5q/vBDmViqbASxJcTyA49eswIdWrhgaN3tTaGzY68hLme39m1gUUhrFgenT9EkFoUndmMT1HNSV0gm9nhns96zUVNI1mfvZybQDKZCHsv1MQ9oDEMhD5o6mW84Q1fIBd7d7PN8aAr5EoUvp7EpVIV808+7z6dpAkUhX4Jx8btAt1QKkxtz1GenVBgU+2FejUJhcHU753eHVBjQiqYjt9QxUiGt565/LfyUCIXk8br47bEPuMLJCwskhSl5vJvfiz4puUKyok7+48AP4s9NXsnjNeEKr6/k8ZqQwu1Lebwmb6/m0tfI2PK1XPo6ySv3QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9/kLLa80Oz3U3ecAAAAASUVORK5CYII=" alt="logo Image" /></Link>
    <div className='w-[25%]'>
      {!showSearch &&
        <button className="bg-white border border-gray-500 rounded-full text-gray-500 w-32 h-[40px] w-[100%] px-2 flex items-center" onClick={handleSearch}><IoSearch  /> Search</button>
      }
    </div>
        {showSearch &&
        <div className="max-w-[500px] w-5/6 min-h-96 bg-gray-800 absolute top-[30px] z-10 rounded-xl overflow-hidden">
          <input type="text" placeholder='Search blogs...' className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className='absolute top-[5px] right-[5px] text-gray-800 text-[30px] cursor-pointer' onClick={handleSearch}><MdCancel /></div>
          {query ? (
            displayedBlogs.map((blog) => (
              <Link to={blog.readMoreUrl} key={blog._id}><div  className='p-[10px] border-b-2 hover:bg-gray-700' onClick={handleSearch}>
                <h3 className='font-bold'>{blog.title}</h3>
                <small>by {blog.author}</small>
                <p>{blog.excerpt}</p>
                Read more...
              </div></Link>
            ))
          ) : (
            <p className="text-center">search somthing.</p>
          )}
        </div>
        }

      <div className="menu">
        <ul className='flex gap-10 items-center'>
          <NavLink className={({isActive})=> isActive ? "bg-gray-700 py-[4px] px-[10px] rounded-full" : ""} to='/' ><li className="scale-100 hover:scale-[90%] transition duration-100 ease-out">Home</li></NavLink>
          <NavLink className={({isActive})=> isActive ? "bg-gray-700 py-[4px] px-[10px] rounded-full" : ""} to='/about' ><li className="scale-100 hover:scale-[90%] transition duration-100 ease-out">About Us</li></NavLink>
          <NavLink className={({isActive})=> isActive ? "bg-gray-700 py-[4px] px-[10px] rounded-full" : ""} to='/contact' ><li className="scale-100 hover:scale-[90%] transition duration-100 ease-out">Contact Us</li></NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar