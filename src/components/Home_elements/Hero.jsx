import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <h1 className="text-emerald-400 text-4xl font-bold">Hey, I'm Arijit  👋</h1>
        <h2 className="text-white text-3xl font-bold">(a.k.a)</h2>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'> Ariz-space</h2>
        <p className=" text-lg text-gray-400 mt-2">
          Engineering fresher | Web3 Enthusiast | Solidity Developer 🛠️
        </p>
        
        <Link to="/about" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Learn More About Me
        </Link>
      </div>
    );
  };
  

export default Hero
