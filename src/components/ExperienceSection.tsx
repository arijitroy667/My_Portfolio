import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Summer Intern",
    company: "TATA STEEL LTD",
    period: "June 2026",
    description: "Industrial automation & Data acquisition systems intern",
    achievements: [
      "Built practical understanding of automation workflows, data acquisition pipelines",
      "Gained exposure to operational technology and industrial data management",
    ],
    accent: "from-emerald-500 to-teal-400",
    dot: "bg-emerald-400",
  },
  {
    title: "Fullstack Developer",
    company: "Google Cloud Rapid Agent Hackathon",
    period: "June 2026",
    description: "Developed Bulwark, an automated pre-deployment testing gate",
    achievements: [
      "Automated pre-merge gate that tests every GitLab MR against real production conditions",
      "Catches infrastructure regressions and LLM hallucinations before deployment",
    ],
    accent: "from-primary-500 to-secondary-400",
    dot: "bg-primary-400",
  },
];

const education = [
  {
    degree: "Bachelor of Technology — Electronics & Communications",
    school: "The LNM Institute of Information Technology",
    period: "2024 – Present",
    description: "Exploring fullstack engineering, generative AI, and systems design.",
  },
];

const techStack = [
  "React/Next.js", "Python/FastAPI", "TypeScript", "AWS",
  "Golang",        "MongoDB/Redis",  "Docker",      "Vector DBs",
];

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-charcoal-900 relative overflow-hidden">
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-secondary-100 dark:bg-secondary-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-overline">02 &nbsp;Experience</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Where I've Been
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-charcoal-200 font-light max-w-2xl">
            Professional journey and academic background in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* ── Experience Timeline ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-8 font-sans">
              <Briefcase size={18} className="text-primary-500" />
              Professional Experience
            </h3>

            <div className="relative space-y-8 pl-8">
              {/* Glowing vertical line */}
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary-400 via-secondary-400 to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  {/* Glowing node */}
                  <div className={`absolute -left-8 top-4 w-5 h-5 rounded-full ${exp.dot} ring-4 ring-white dark:ring-charcoal-900 shadow-lg`}
                    style={{ boxShadow: `0 0 12px currentColor` }}
                  />

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="glass-card rounded-2xl p-6"
                  >
                    {/* Accent top line */}
                    <div className={`h-0.5 rounded-full bg-gradient-to-r ${exp.accent} mb-5`} />

                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-base">{exp.title}</h4>
                        <p className={`text-sm font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-charcoal-300 font-mono">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-charcoal-200 mb-4">{exp.description}</p>

                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-charcoal-300">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.accent}`} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Education + Tech Stack ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-8 font-sans">
                <GraduationCap size={18} className="text-secondary-500" />
                Education
              </h3>

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="h-0.5 rounded-full bg-gradient-to-r from-secondary-500 to-primary-400 mb-5" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">{edu.school}</p>
                  <p className="text-xs text-gray-400 dark:text-charcoal-300 font-mono mb-3">{edu.period}</p>
                  <p className="text-sm text-gray-600 dark:text-charcoal-200">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Core Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-charcoal-300 mb-5">
                Core Technologies
              </p>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.07 }}
                    whileHover={{ scale: 1.04, y: -1 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-700 border border-gray-100 dark:border-charcoal-500 text-sm font-medium text-gray-700 dark:text-charcoal-100 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 flex-shrink-0" />
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
