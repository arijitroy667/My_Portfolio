import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-950 text-white px-8">
      {/* Left Section - Image */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/img/my_img1.JPG" // Replace with your actual image path
          alt="Arijit"
          className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>

      {/* Right Section - Intro Text */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <motion.h1
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm Arijit 👋
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-4 hover:text-white transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          An engineering fresher **passionate about**  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold"> Web3 & Blockchain</span>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-4 hover:text-white transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Studying at <span className="font-semibold text-purple-400">The LNMIIT</span>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-4 hover:text-white transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Learning **Web Development** and **Solidity** smart contracts.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-4 hover:text-white transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Experienced with **Solidity Foundry**, now exploring  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 font-semibold"> Move Language & Aptos Chain</span>.
        </motion.p>
      </div>
    </div>
  );
}

export default Intro;
