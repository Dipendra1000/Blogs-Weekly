import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import UserProfile from './pages/UserProfile'
import BlogDetails from './pages/BlogDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import CategoryPage from './pages/CategoryPage'
import AuthorBlogs from './pages/AuthorBlogs'
import Footer from './components/Footer'
// import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/author/:authorName" element={<AuthorBlogs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
