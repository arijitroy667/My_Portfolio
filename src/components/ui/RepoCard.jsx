import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const RepoCard = ({ repoName, repoUrl, readmeUrl, techStack, stars }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 max-w-md mx-auto"
    >
      <div className="flex justify-between items-center">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-white hover:underline"
        >
          {repoName}
        </a>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={18} />
          <span className="text-sm font-semibold">{stars}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <a
          href={readmeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black hover:underline"
        >
          View README
        </a>
      </div>
    </motion.div>
  );
};

export default RepoCard;
