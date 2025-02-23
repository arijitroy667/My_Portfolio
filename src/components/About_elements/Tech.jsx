import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiSolidity, SiRust } from "react-icons/si";
import { RiShieldKeyholeFill } from "react-icons/ri";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Solidity Foundry", icon: <SiSolidity className="text-gray-300" /> },
  { name: "ZK-Sync Foundry", icon: <RiShieldKeyholeFill className="text-green-400" /> },
  { name: "Move & Aptos CLI (Ongoing)", icon: <SiRust className="text-orange-500" /> },
];

function Tech() {
  return (
    <div className="pb-10 text-white px-8 py-16 flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-8 pb-3 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Tech Stack 🚀
      </motion.h2>

      {/* Animated Subtext */}
      <motion.p
        className="text-lg text-gray-400 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        By now, you’ve probably guessed what tech stack I use. Here’s what I’ve mastered so far:
      </motion.p>

      {/* Tech Stack Cards with Cool UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:border-blue-500 transition-all hover:shadow-blue-500/50 transform hover:scale-110"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <div className="text-4xl">{tech.icon}</div>
            <p className="text-lg font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
