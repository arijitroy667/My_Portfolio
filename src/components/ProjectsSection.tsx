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
      title: "Courtney AI",
      description:
        "Research-grade multi-agent reasoning framework for high-stakes AI decision workflows. Features modular agent orchestration, structured adversarial debate, and cryptographic verification of agent execution.",
      image: "",
      gradient: "from-violet-600 to-indigo-600",
      technologies: ["React", "FastAPI", "LangChain", "ZK Proofs", "Python"],
      category: "AI/ML",
      github: "https://github.com/arijitroy667/Courtney-AI",
      demo: "https://courtney-ai.vercel.app/",
    },
    {
      title: "Polygent AI",
      description:
        "AI-powered market intelligence platform generating probabilistic insights from Polymarket trade data. Features FastAPI backend for market ingestion and LLM-driven reasoning for automated interpretation.",
      image: "",
      gradient: "from-blue-600 to-cyan-500",
      technologies: ["FastAPI", "Python", "LLMs", "React", "Tailwind"],
      category: "AI/ML",
      github: "https://github.com/arijitroy667/Polygent-AI",
      demo: "https://polygent.vercel.app/",
    },
    {
      title: "Sentinel",
      description:
        "Real-time DeFi protection layer built on Uniswap V4 Hooks. Detects threats via multi-agent monitoring, risk scoring, and cross-chain orchestration for automated liquidity defense.",
      image: "",
      gradient: "from-emerald-600 to-teal-500",
      technologies: ["Solidity", "TypeScript", "Uniswap V4", "Node.js"],
      category: "Blockchain",
      github: "https://github.com/arijitroy667/Sentinel",
      demo: "",
    },
    {
      title: "Stargazer",
      description:
        "Production-grade social media platform with secure JWT authentication, cookie-based session handling, and PM2-optimized backend for improved concurrency and CPU utilization.",
      image: "",
      gradient: "from-orange-500 to-pink-500",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "PM2"],
      category: "Full Stack",
      github: "https://github.com/arijitroy667/Stargazer",
      demo: "https://stargazer-social.vercel.app/",
    },
    {
      title: "Vaultopia",
      description:
        "An ERC-4626 Vault to deposit USDC and earn yield through Lido Finance. Fullstack DeFi application with on-chain vault interactions.",
      image: "/Vaultopia.png",
      gradient: "",
      technologies: ["React", "Next.js", "Ether.js", "Solidity", "Tailwind"],
      category: "Blockchain",
      github: "https://github.com/arijitroy667/Vaultopia",
      demo: "https://vaultopia-beta.vercel.app/",
    },
  ];

  const categories = ["All", "AI/ML", "Full Stack", "Blockchain"];

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
            AI agents, fullstack platforms, and blockchain protocols — built to
            solve real problems
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
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white/90 text-3xl font-bold tracking-wide">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors text-sm"
                    >
                      Demo
                    </motion.a>
                  )}
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
