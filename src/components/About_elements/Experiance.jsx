import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="bg-gray-950 pt-30 text-white">
      <motion.h1 
        className="text-5xl font-extrabold mb-8 pb-3 text-center bg-gradient-to-r from-purple-500 to-orange-300 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Web3 Experience
      </motion.h1>
      
      <motion.p
        className="text-lg max-w-2xl mx-auto mb-6 text-lime-300 hover:text-white transition duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I started my Web3 journey by joining our college Web3 club Cipher. 
      </motion.p>
      <motion.p
        className="text-lg max-w-2xl mx-auto mb-6 text-lime-400 hover:text-white transition duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        It all began when I discovered the Ethereum whitepaper. 
      </motion.p>
      <motion.p
        className="text-lg max-w-2xl mx-auto mb-6 text-lime-500 hover:text-white transition duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Out of curiosity, I started exploring the Web3 world and learning from Cyfrin Updraft. 
      </motion.p>

      <motion.h2 
        className="text-3xl font-semibold text-center mt-8 mb-6 text-purple-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Milestones
      </motion.h2>

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
            LNMHacks 7.0
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
  );
}

export default Experience;
