import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Code,
  Github,
  Twitter,
  Linkedin,
  TerminalSquare,
  Zap,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "Backend Development", level: 90, icon: Zap },
    { name: "Foundry & Ether.js", level: 80, icon: TerminalSquare },
    { name: "Project Management", level: 88, icon: Award },
  ];

  const achievements = [
    // {
    //   title: "Top Performer Award",
    //   description:
    //     "Recognized for outstanding contribution to product development",
    //   year: "2023",
    // },
    // {
    //   title: "Open Source Contributor",
    //   description: "Active contributor to major React and Node.js projects",
    //   year: "2022",
    // },
    // {
    //   title: "Tech Conference Speaker",
    //   description: "Presented at React Conference on modern web architecture",
    //   year: "2023",
    // },
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
            Passionate developer with 1+ years of experience crafting digital
            solutions that make a difference. I bridge the gap between
            real-world and onchain entities.
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

                  {/* Social icons that appear on hover with enhanced animation */}
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
                      href="https://x.com/ARIJITROY115058/status/1895836210834391091"
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
                I'm a full-stack developer based in Jaipur, India, specializing
                in Defi. My journey began with Cipher club from LNMIIT, and I've
                since worked on my personal projects and several hackathons.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through technical articles.
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">
                {achievement.year}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
