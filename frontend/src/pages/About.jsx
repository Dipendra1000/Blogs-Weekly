import React from 'react'

const About = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-12 px-6 py-8 bg-white shadow-lg rounded-lg mb-[50px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="text-blue-600 font-semibold">Blogs Weekly</span> – your go-to place for tech tutorials, coding advice, and productivity hacks.
        </p>

        <p className="text-gray-700 mb-4">
          Founded by <span className="text-blue-600 font-semibold">Dipendra Chauhan</span> in <span className="font-medium">2025</span>, this blog is built with a simple mission: to share valuable, honest, and inspiring content that helps people grow, learn, and enjoy life.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you're here to read the latest articles, learn something new, or just browse around, we’re happy to have you.
        </p>

        <p className="text-gray-700 mb-4">
          When we’re not writing or editing, we’re probably researching trends, reading, or engaging with our community. We believe in keeping things real, friendly, and informative.
        </p>

        <div className="mt-10 italic text-gray-500">
          – The Blogs Weekly Team
        </div>
      </div>
    </>
  )
}

export default About