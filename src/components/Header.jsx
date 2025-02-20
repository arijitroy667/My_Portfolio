import {Link,NavLink} from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    //<header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg">
    <header className='fixed top-[0.5rem] left-0 w-full p-4 text-white bg-gray-950 bg-opacity-80 z-50 backdrop-blur-md'>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">My_Synopsis</div>
          <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link to="/github" className="hover:text-blue-400 transition duration-300">
              GitHub
            </Link>
            <Link to="/journey" className="hover:text-blue-400 transition duration-300">
              Journey
            </Link>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

