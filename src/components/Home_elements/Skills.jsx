import { motion } from "framer-motion";
import { FaReact, FaEthereum, FaNodeJs } from "react-icons/fa";
import { SiSolidity, SiJavascript, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Solidity", icon: <SiSolidity />, color: "text-gray-300" },
  { name: "Ethereum", icon: <FaEthereum />, color: "text-purple-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
];

const Skills = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-white text-3xl font-bold">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-lg shadow-lg ${tech.color}`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-5xl"
            >
              {tech.icon}
            </motion.div>
            <span className="text-white text-lg">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
