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
      setData(data)
    })
  },[])

  const [repo,setRepo] = useState([])
  useEffect(()=>{
     fetch('https://api.github.com/users/arijitroy667/repos')
     .then(response=>response.json())
     .then(repo=> {
      setRepo(repo)
    })
  },[])

   console.log(repo[1]);
  

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
            {repo[1].name}
          </motion.h2>
          <p className="text-gray-400"><Link to='https://github.com/arijitroy667/My_Portfolio'>Click to visit</Link></p>
          <p className="text-gray-400">🏆 Type: Web2.0</p>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>🔥 {repo[1].description}</li>
            <li>🌐 Commits: 10+</li>
            <li>💻 Tech stack: {repo[1].language}</li>
          </ul>
        </motion.div>
        </div>
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
            {repo[0].name}
          </motion.h2>
          <p className="text-gray-400"><Link to='https://github.com/arijitroy667/my_First_Smart_Contract'>Click to visit</Link></p>
          <p className="text-gray-400">🏆 Type: Web3.0</p>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>🔥 {repo[0].description}</li>
            <li>🌐 Chain: Ethereum Sepolia</li>
            <li>💻 Tech stack: {repo[0].language}</li>
          </ul>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Github
