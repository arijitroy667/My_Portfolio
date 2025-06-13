import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Chromion Hackathon",
      period: "June 2025",
      description: "Team Lead for TangibleFi",
      achievements: [
        "Tokenized Real-World-Assets into NFTs",
        "Multitoken loan repayment taken cross-chain (via CCIP)",
        "Automated loan repayments using Chainlink Automation",
      ],
      logo: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      title: "Full Stack Developer",
      company: "LNMHacks 7.0",
      period: "Jan 2025",
      description:
        "Developed a decentralized application for chess enthusiasts",
      achievements: [
        "Dual chess betting onchain",
        "Purely based on skills and confidence",
        "Deployed on Aptos testnet using Move",
      ],
      logo: "https://images.pexels.com/photos/5849580/pexels-photo-5849580.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electronics and Communications ",
      school: "The LNMIIT",
      period: "2024 - present",
      description: "Learning electronics and web 3.0",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and academic background in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <Briefcase className="text-primary-600 dark:text-primary-400" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900" />

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mt-4 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <Calendar className="text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Core Technologies
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React/Next.js",
                  "Node.js/Express",
                  "TypeScript",
                  "Solidity",
                  "Docker",
                  "MongoDB",
                  "PostgreSQL",
                  "Rust",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-2 rounded-lg text-center text-sm font-medium"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
