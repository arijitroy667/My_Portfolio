import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function Github() {

  const [data,setData] = useState([])
  useEffect(()=>{
     fetch('https://api.github.com/users/arijitroy667')
     .then(response=>response.json())
     .then(data=> {
      console.log(data);
      setData(data)
    })
  },[])

  return (
    <div className='bg-gray-950 min-h-screen text-white'>
      <div>
        <img src={data.avatar_url} alt="" />
        <h1>Username: {data.login}</h1>
        <h2><Link to={data.html_url}>Link to my Github</Link></h2>
      </div>
      <div>
        <h1>My Repositories</h1>
        <div className="flex justify-center">
        <motion.div 
          className="w-full max-w-lg bg-gray-900 text-white shadow-lg rounded-2xl overflow-hidden p-6 border border-teal-500"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px limegreen" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.h2 
            className="text-2xl font-semibold text-teal-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.repos_url}
          </motion.h2>
          <p className="text-gray-400">📅 Date: 24th Jan - 26th Jan</p>
          <p className="text-gray-400">🏆 Type: Hackathon</p>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>🔥 Built a "Decentralized Chess Game" with 4 other members</li>
            <li>🌐 Chain: Aptos</li>
            <li>💻 Tech stack: Move, TypeScript, Node.js, React.js</li>
          </ul>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Github
