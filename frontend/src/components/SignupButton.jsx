import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const SignupButton = () => {
    const location = useLocation()
    const isLoggedIn = !!localStorage.getItem('token')

    const isAuthPage = location.pathname === "/login" || location.pathname === "/signup"

    if(isLoggedIn || isAuthPage){
        return null
    }

  return (
        <Link to="/signup" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>SignUp</Link>
  )
}

export default SignupButton