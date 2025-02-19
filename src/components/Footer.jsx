import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-2 text-gray-400">Feel free to reach out through any of these platforms</p>
          </div>
          <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
            <a href="https://x.com/ARIJITROY115058?t=bbfNhKmGzONPTzd2YCgMxg&s=09" className="hover:text-blue-400 transition duration-300">
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a href="https://t.me/Ariz_space7453" className="hover:text-blue-400 transition duration-300">
              <FaTelegram className="h-6 w-6" />
            </a>
            <a href="https://discordapp.com/users/yourusername" className="hover:text-blue-400 transition duration-300">
              <FaDiscord className="h-6 w-6" />
            </a>
            <a href="mailto:arijitroy0445@gmail.com" className="hover:text-blue-400 transition duration-300">
              <MdEmail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ariz-space. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

