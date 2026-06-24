import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Award, Code, Rocket, Users } from "lucide-react";

const milestones = [
  {
    year: "June 2026",
    title: "Summer intern @ TATA STEEL LTD",
    description: "Working on a project to streamline data acquisition and automate industrial processes.",
    icon: Code,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.4)",
    achievements: ["Developed SKADA system"],
  },
  {
    year: "June 2026",
    title: "Google Rapid Agent Hackathon",
    description: "Developed Bulwark — the GitLab pre-merge gate.",
    icon: Award,
    color: "from-primary-500 to-secondary-400",
    glow: "rgba(124,58,237,0.4)",
    achievements: [
      "Checks every MR opened",
      "Spins up ephemeral dev environment",
      "Blocks until CI/CD pipeline passes",
    ],
  },
  {
    year: "May 2026",
    title: "Meta × OpenEnv × PyTorch Hackathon",
    description: "Engineered warehouse environment using AI to automate RL model testing.",
    icon: Rocket,
    color: "from-blue-500 to-indigo-400",
    glow: "rgba(59,130,246,0.4)",
    achievements: [
      "Built OpenEnv-compliant RL environment",
      "Training RL policies using PyTorch & Huggingface",
      "Future integration to improve efficiency",
    ],
  },
  {
    year: "Jan 2026",
    title: "LNMHacks 8.0",
    description: "Organized 600+ devs, networking with sponsors, managing logistics",
    icon: Star,
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.4)",
    achievements: [
      "Developed Courtney AI",
      "Beats LLM hallucinations via agent reasoning",
      "Won 2nd place — x402 Agentic track",
    ],
  },
  {
    year: "2024",
    title: "Member of Cipher Club",
    description: "Joined a community of top developers and tech enthusiasts. Engaged in exclusive workshops and networking events.",
    icon: Users,
    color: "from-purple-500 to-violet-400",
    glow: "rgba(139,92,246,0.4)",
    achievements: [
      "Organized 2 hands-on workshops on ERC-20 tokens",
      "Organized Roastathon with senior developers",
      "Learnt blockchain basics to Foundry development @EVM",
    ],
  },
];

const stats = [
  { number: "25+",   label: "Projects Completed",    accent: "from-primary-500 to-secondary-400" },
  { number: "2.5+",  label: "Years Experience",       accent: "from-emerald-500 to-teal-400" },
  { number: "300+",  label: "GitHub Contributions",   accent: "from-pink-500 to-rose-400" },
  { number: "1000+", label: "Article Views",          accent: "from-amber-500 to-orange-400" },
];

const JourneySection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="journey" className="py-24 bg-gray-50/80 dark:bg-charcoal-800 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-overline">05 &nbsp;Journey</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My Milestones
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-charcoal-200 font-light">
            Key moments that shaped my path in tech
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 via-secondary-400 via-pink-400 to-transparent" />

          <div className="space-y-12">
            {milestones.map((m, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={m.year + m.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} gap-0`}
                >
                  {/* Glowing node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${m.color} p-0.5`}
                      style={{ boxShadow: `0 0 20px ${m.glow}` }}
                    >
                      <div className="w-full h-full rounded-full bg-white dark:bg-charcoal-800 flex items-center justify-center">
                        <m.icon size={22} className="text-gray-700 dark:text-gray-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                      {/* Gradient accent top line */}
                      <div className={`h-0.5 rounded-full bg-gradient-to-r ${m.color} mb-5`} />

                      {/* Mobile: show icon inline */}
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                          <m.icon size={18} className="text-white" />
                        </div>
                        <span className="font-mono text-xs text-gray-400 dark:text-charcoal-300">{m.year}</span>
                      </div>

                      <span className={`hidden md:inline-block text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${m.color} text-white mb-3`}>
                        {m.year}
                      </span>

                      <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2 leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-charcoal-200 mb-4 leading-relaxed">
                        {m.description}
                      </p>

                      <ul className="space-y-1.5">
                        {m.achievements.map((a, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-charcoal-300">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${m.color}`} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className={`font-display text-4xl font-extrabold bg-gradient-to-r ${s.accent} bg-clip-text text-transparent mb-1`}>
                {s.number}
              </div>
              <div className="text-sm text-gray-500 dark:text-charcoal-200 font-light">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
