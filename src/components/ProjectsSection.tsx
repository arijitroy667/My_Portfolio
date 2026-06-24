import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const categoryAccent: Record<string, string> = {
  "AI/ML":       "from-violet-500 to-purple-400",
  "Full Stack":  "from-cyan-500 to-blue-400",
  "Blockchain":  "from-emerald-500 to-teal-400",
};

const categoryGlow: Record<string, string> = {
  "AI/ML":       "rgba(139,92,246,0.3)",
  "Full Stack":  "rgba(6,182,212,0.3)",
  "Blockchain":  "rgba(16,185,129,0.3)",
};

const projects = [
  {
    title: "Bulwark",
    description: "Automated pre-merge gate that tests every GitLab Merge Request against real production conditions.",
    image: "/Bulwark.png",
    technologies: ["GCP", "Typescript", "Terraform", "Python", "FastAPI"],
    category: "Full Stack",
    github: "https://github.com/arijitroy667/Bulwark",
    demo: "https://devpost.com/software/bulwark",
  },
  {
    title: "WareHouse ENV",
    description: "AI-powered Multi-Agent RL simulation platform for dynamic warehouse logistics.",
    image: "/warehouse.jpg",
    technologies: ["FastAPI", "Python", "LLMs", "Huggingface", "OpenEnv"],
    category: "AI/ML",
    github: "https://github.com/arijitroy667/Warehouse_env",
    demo: "https://warehouse-env.vercel.app/",
  },
  {
    title: "Courtney AI",
    description: "Research-grade multi-agent reasoning framework featuring modular orchestration, adversarial debate, and cryptographic verification of agent execution.",
    image: "/courtneyai.png",
    technologies: ["React", "FastAPI", "LangChain", "ZK Proofs", "Python"],
    category: "AI/ML",
    github: "https://github.com/arijitroy667/Courtney-AI",
    demo: "https://courtney-ai.vercel.app/",
  },
  {
    title: "Sentinel",
    description: "Real-time DeFi protection layer built on Uniswap V4 Hooks. Multi-agent monitoring, risk scoring, and cross-chain orchestration for automated liquidity defense.",
    image: "/sentinal.png",
    technologies: ["Solidity", "TypeScript", "Uniswap V4", "Node.js"],
    category: "Blockchain",
    github: "https://github.com/arijitroy667/Sentinel",
    demo: "",
  },
  {
    title: "Polygent",
    description: "Advanced AI-powered analytics platform designed for Polymarket prediction markets.",
    image: "/polygent.png",
    technologies: ["Next.js", "Intelligence", "x402", "Python", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/arijitroy667/Polygent",
    demo: "https://polygent.vercel.app/",
  },
  {
    title: "Stargazer",
    description: "Production-grade social media platform with secure JWT auth, cookie-based sessions, and PM2-optimized backend.",
    image: "/stargazer.png",
    technologies: ["React", "Express.js", "MongoDB", "JWT", "PM2"],
    category: "Full Stack",
    github: "https://github.com/arijitroy667/Stargazer",
    demo: "https://stargazer-social.vercel.app/",
  },
];

const categories = ["All", "AI/ML", "Full Stack", "Blockchain"];

// 3D tilt on mouse
function TiltCard({ children, glow }: { children: React.ReactNode; glow: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
    el.style.boxShadow = `0 20px 60px ${glow}`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.boxShadow = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      className="h-full"
    >
      {children}
    </div>
  );
}

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50/80 dark:bg-charcoal-800 relative overflow-hidden">
      <div className="absolute -right-24 top-24 w-80 h-80 rounded-full bg-accent-100 dark:bg-accent-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="section-overline">03 &nbsp;Projects</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            What I've Built
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-charcoal-200 font-light">
            AI agents, fullstack platforms, and blockchain protocols — shipped to solve real problems
          </p>
        </motion.div>

        {/* Filter tabs with sliding indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-10 p-1 glass-card rounded-2xl w-fit"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                activeFilter === cat
                  ? "text-white"
                  : "text-gray-500 dark:text-charcoal-200 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeFilter === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl shimmer-btn"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0,  scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <TiltCard glow={categoryGlow[project.category]}>
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group">
                    {/* Category accent line */}
                    <div className={`h-0.5 bg-gradient-to-r ${categoryAccent[project.category]}`} />

                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-44 bg-gradient-to-br ${categoryAccent[project.category]} flex items-center justify-center`}>
                          <span className="text-white/90 text-2xl font-display font-bold">{project.title}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover link icons */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors">
                          <Github size={14} />
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-tight">
                          {project.title}
                        </h3>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border bg-gradient-to-r ${categoryAccent[project.category]} bg-clip-text text-transparent border-current opacity-60 flex-shrink-0`}>
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-charcoal-200 leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-charcoal-600 text-gray-600 dark:text-charcoal-100 text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex-1 text-center py-2 text-sm font-medium rounded-xl bg-gray-100 dark:bg-charcoal-700 text-gray-700 dark:text-charcoal-100 hover:bg-gray-200 dark:hover:bg-charcoal-600 transition-colors">
                          Code
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="flex-1 text-center py-2 text-sm font-medium rounded-xl shimmer-btn text-white transition-colors">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
