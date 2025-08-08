import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Filter } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Vaultopia",
      description:
        "An ERC-4626 Vault to deposit USDC, and earn yield through Lido finance. ",
      image: "/Vaultopia.png",
      technologies: ["React", "Next.js", "Ether.js", "Solidity", "Tailwind"],
      category: "Full Stack",
      github: "https://github.com/arijitroy667/Vaultopia",
      demo: "https://vaultopia-beta.vercel.app/",
    },
    {
      title: "Nebula DAO",
      description:
        "A decentralized voting platform using ERC-20 Votes, allowing protocols to govern themselves through community-driven decisions.",
      image: "/Nebula.png",
      technologies: ["React", "Next.js", "Solidity", "Tailwind"],
      category: "Full Stack",
      github: "https://github.com/arijitroy667/NebulaDAO",
      demo: "https://nebula-dao-three.vercel.app/",
    },
    {
      title: "USDC Hoodi Faucet",
      description:
        "Developed USDC auto faucet on Hoodi testnet. It auto-mints USDC at a fixed time interval.",
      image: "/USDC_Hoodi.png",
      technologies: ["React", "Ether.js", "Solidity", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/arijitroy667/USDC_Hoodi",
      demo: "https://usdc-hoodi.vercel.app/",
    },
    {
      title: "Uniswap-Holesky",
      description:
        "Forked Uniswap V2 on Holesky testnet, allowing users to swap tokens with native ETH.",
      image: "/Uniswap_Holesky.png",
      technologies: ["React", "Solidity", "Uniswap V2", "Ether.js", "Tailwind"],
      category: "Full Stack",
      github: "https://github.com/arijitroy667/Uniswap-Holesky",
      demo: "https://uniswap-holesky-eu.vercel.app/",
    },
    {
      title: "Dimensia token",
      description: "Deployed my first ERC-20 token on Sepolia testnet.",
      image: "/Dimensia.png",
      technologies: ["Javascript", "Ether.js", "Solidity"],
      category: "Frontend",
      github: "https://github.com/arijitroy667/Dimensia_token",
      demo: "https://dimensia.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark mode, and interactive 3D elements.",
      image: "/Portfolio.png",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind"],
      category: "Frontend",
      github: "https://github.com/arijitroy667/My_Portfolio/",
      demo: "https://portfolio-arijitroy.vercel.app/",
    },
    {
      title: "Password Generator",
      description:
        "A modern, responsive password generator with strong encryption and user-friendly interface.",
      image: "/Password.png",
      technologies: ["React", "Tailwind"],
      category: "Frontend",
      github: "https://github.com/arijitroy667/Password_Generater",
      demo: "https://password-generater-neon.vercel.app/",
    },
    {
      title: "Guess the Number Game",
      description:
        "A modern, responsive guess the number game with strong encryption and user-friendly interface.",
      image: "/Guess.jpg",
      technologies: ["Javascript"],
      category: "Backend",
      github: "https://github.com/arijitroy667/Guess_The_Number",
      demo: "https://github.com/arijitroy667/Guess_The_Number",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development,
            design, and problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Filter className="text-gray-400 my-auto mr-2" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors text-sm"
                  >
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
