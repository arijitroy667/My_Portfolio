import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <div className='flex'>
      <div className="flex flex-col items-center justify-center text-center py-10 px-20">
        <h1 className="text-emerald-400 text-4xl font-bold">Hey, I'm Arijit  👋</h1>
        <h2 className="text-white text-3xl font-bold py-6">(a.k.a)</h2>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text py-3'> Ariz-space</h2>
        <p className=" text-lg text-gray-400 mt-2 py-4">
          Engineering fresher | Web3 Enthusiast | Solidity Developer 🛠️
        </p>
        
        <Link to="/about" className="mt-4 px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Learn More About Me
        </Link>
      </div>
      <div className='scale-[0.8] origin-center mx-0'>
      <iframe src='https://my.spline.design/abstractcryptoscene-dc1bdded479f9b84e94c031f10a25dde/' frameborder='0' width='100%' height='100%' loading="lazy" className='w-[110vh] h-[80vh]'></iframe>
      </div>
     </div>
    );
  };
  

export default Hero
