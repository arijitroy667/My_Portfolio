import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Twitter,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const techStack = [
    "React/Next.js",
    "Python",
    "LangChain",
    "FastAPI",
    "Node.js",
    "TypeScript",
  ];

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Animated code lines for the right-side visual
  const codeLines = [
    { text: "const agent = new ReasoningAgent({", color: "text-blue-400" },
    { text: '  model: "gpt-4-turbo",', color: "text-emerald-400" },
    { text: "  tools: [search, analyze, decide],", color: "text-purple-400" },
    { text: "  memory: vectorStore,", color: "text-amber-400" },
    { text: "});", color: "text-blue-400" },
    { text: "", color: "" },
    { text: "await agent.orchestrate({", color: "text-blue-400" },
    { text: '  task: "multi-step reasoning",', color: "text-emerald-400" },
    { text: "  agents: [prosecutor, defender],", color: "text-purple-400" },
    { text: "  verify: true,", color: "text-amber-400" },
    { text: "});", color: "text-blue-400" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-medium"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
            >
              Arijit Roy
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-300"
            >
              Fullstack + Gen AI Engineer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Building multi-agent systems, scalable backends, and
            production-grade React/Next.js applications. Focused on AI
            reasoning infrastructure and agent orchestration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1MU4iop_lFdgGDnLT75HuNgjIWwgL0dpf/view?usp=sharing"
                );
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/arijitroy667/" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/arijit-roy-148109314",
              },
              {
                icon: Twitter,
                href: "https://x.com/ARIJITROY115058",
              },
              { icon: Mail, href: "mailto:arijitroy0445@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — Animated code terminal visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Soft glow behind the terminal */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-2xl"
            />

            {/* Terminal window */}
            <div className="relative bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  agent.ts
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.12, duration: 0.4 }}
                    className="flex"
                  >
                    <span className="text-gray-600 w-6 text-right mr-4 select-none text-xs leading-relaxed">
                      {index + 1}
                    </span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="mt-1 ml-10 w-2 h-4 bg-primary-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
