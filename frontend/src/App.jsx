import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import BlogDetails from './components/BlogDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import CategoryPage from './pages/CategoryPage'
import AuthorBlogs from './pages/AuthorBlogs'
import Footer from './components/Footer'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Blogs /><Footer /></>,
    },
    {
      path:"/blog/:slug",
      element: <><Navbar /><BlogDetails /><Footer /></>,
    },
    {
      path:"/about",
      element: <><Navbar /><About /><Footer /></>,
    },
    {
      path:"/contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
    {
      path:"/category/:categoryName",
      element: <><Navbar /><CategoryPage /><Footer /></>,
    },
    {
      path:"/author/:authorName",
      element: <><Navbar /><AuthorBlogs /><Footer /></>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
