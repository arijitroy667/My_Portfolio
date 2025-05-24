import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import RepoCard from "./ui/RepoCard";

function Github() {
  const repos = [
    {
      name: "Vaultopia",
      url: "https://github.com/arijitroy667/Vaultopia",
      readme: "https://github.com/arijitroy667/Vaultopia/blob/master/README.md",
      tech: ["Solidity", "Ethers v6", "Next.js", "TailwindCSS", "Lido API"],
      stars: 15,
      bg: "from-purple-500 to-indigo-600",
    },
    {
      name: "Nebula DAO",
      url: "https://github.com/arijitroy667/NebulaDAO",
      readme: "https://github.com/arijitroy667/NebulaDAO/blob/master/readme.md",
      tech: ["Solidity", "Ethers v6", "React.js", "TailwindCSS", "ERC20 Votes"],
      stars: 12,
      bg: "from-blue-600 to-cyan-500",
    },
    {
      name: "USDC Holesky Faucet",
      url: "https://github.com/arijitroy667/USDC_Holesky",
      readme:
        "https://github.com/arijitroy667/USDC_Holesky/blob/master/README.md",
      tech: ["Solidity", "Ethers v6", "React.js", "TailwindCSS"],
      stars: 12,
      bg: "from-green-500 to-emerald-600",
    },
    {
      name: "Uniswap V2 forked",
      url: "https://github.com/arijitroy667/Uniswap-Holesky",
      readme:
        "https://github.com/arijitroy667/Uniswap-Holesky/blob/master/README.md",
      tech: ["Solidity", "Ethers v6", "React.js", "TailwindCSS"],
      stars: 10,
      bg: "from-pink-500 to-rose-500",
    },
    {
      name: "Dimensia token",
      url: "https://github.com/arijitroy667/Dimensia_token",
      readme:
        "https://github.com/arijitroy667/Dimensia_token/blob/master/README.md",
      tech: ["Solidity", "Ethers v6", "React.js", "TailwindCSS"],
      stars: 10,
      bg: "from-yellow-500 to-orange-500",
    },
    {
      name: "My Portfolio",
      url: "https://github.com/arijitroy667/My_Portfolio",
      readme:
        "https://github.com/arijitroy667/My_Portfolio/blob/master/README.md",
      tech: ["React.js", "React Router", "TailwindCSS"],
      stars: 10,
      bg: "from-gray-700 to-gray-900",
    },
    {
      name: "Password generator",
      url: "https://github.com/arijitroy667/Password_Generater",
      readme:
        "https://github.com/arijitroy667/Password_Generater/blob/master/README.md",
      tech: ["JavaScript", "React.js", "TailwindCSS"],
      stars: 10,
      bg: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="mt-15 text-4xl font-bold text-center mb-12">
        <motion.h2
                className="text-5xl font-extrabold mb-8 pb-3 text-center bg-gradient-to-r from-emerald-200 to-cyan-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                My Github Projects 🚀
              </motion.h2>
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <div
            key={index}
            className={`rounded-2xl bg-gradient-to-br ${repo.bg} p-1`}
          >
            <RepoCard
              repoName={repo.name}
              repoUrl={repo.url}
              readmeUrl={repo.readme}
              techStack={repo.tech}
              stars={repo.stars}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
