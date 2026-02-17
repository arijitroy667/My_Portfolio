import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Code,
  Github,
  Twitter,
  Linkedin,
  Brain,
  Zap,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Fullstack Development", level: 95, icon: Code },
    { name: "Generative AI & LLMs", level: 90, icon: Brain },
    { name: "Agent Orchestration", level: 85, icon: Zap },
    { name: "Project Management", level: 88, icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fullstack + Gen AI engineer with hands-on hackathon experience and a
            drive to build production-grade systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Circular gradient border frame with hover animation */}
              <div className="p-2 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full shadow-xl aspect-square max-w-sm mx-auto hover:shadow-2xl transition-all duration-300 group">
                {/* Circular image container */}
                <div className="relative overflow-hidden rounded-full bg-white w-full h-full">
                  {/* Image with scale effect */}
                  <motion.img
                    src="/ArijitRoyImg.jpg"
                    alt="Arijit Roy"
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:brightness-50"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Social icons that appear on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <motion.a
                      href="https://github.com/arijitroy667"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: -20 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                        transition: { delay: 0.1 },
                      }}
                      className="bg-white p-3 rounded-full text-primary-600 shadow-lg hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/arijit-roy-148109314"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: 20 }}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                        transition: { delay: 0.2 },
                      }}
                      className="bg-white p-3 rounded-full text-primary-600 shadow-lg hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://x.com/ARIJITROY115058"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: -20 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                        transition: { delay: 0.3 },
                      }}
                      className="bg-white p-3 rounded-full text-primary-600 shadow-lg hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter size={20} />
                    </motion.a>
                  </div>

                  {/* Animated gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 0.7,
                      scale: 1.05,
                      transition: {
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a fullstack + generative AI engineer based in Jaipur, India,
                currently pursuing B.Tech at LNMIIT. I build multi-agent
                reasoning systems, scalable backends, and polished React/Next.js
                frontends — with a foundation in blockchain development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I've competed at ETH Global, Chainlink Chromion, and LNMHacks,
                and I write about DeFi protocols and AI architectures on Medium.
                I love turning complex problems into elegant, production-ready
                solutions.
              </p>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon
                        size={20}
                        className="text-primary-600 dark:text-primary-400"
                      />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
