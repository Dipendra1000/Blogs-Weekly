import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";


const UserProfileButton = () => {

  const location = useLocation()
    const isLoggedin = !!localStorage.getItem('token')

    const isProfilePage = location.pathname === "/profile"

    if(!isLoggedin || isProfilePage){
        return null
    }

    return (
    <Link to="/profile" className='fixed z-10 bg-gray-800 rounded-full right-[20px] bottom-[30px]'><FaUserCircle className='size-10'/></Link>
  )
}

export default UserProfileButton