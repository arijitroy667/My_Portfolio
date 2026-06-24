import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Twitter, Linkedin } from "lucide-react";

const skills = [
  { name: "React / Next.js",     color: "from-blue-500 to-cyan-400" },
  { name: "Python / FastAPI",    color: "from-yellow-500 to-orange-400" },
  { name: "TypeScript",          color: "from-blue-600 to-indigo-500" },
  { name: "LangChain / LLMs",    color: "from-green-500 to-emerald-400" },
  { name: "Multi-Agent Systems", color: "from-violet-600 to-purple-400" },
  { name: "Node.js",             color: "from-green-600 to-lime-400" },
  { name: "Solidity / EVM",      color: "from-purple-600 to-indigo-400" },
  { name: "Docker / AWS",        color: "from-orange-500 to-red-400" },
  { name: "Vector Databases",    color: "from-teal-500 to-cyan-400" },
  { name: "Golang",              color: "from-sky-500 to-blue-400" },
  { name: "MongoDB / Redis",     color: "from-red-500 to-rose-400" },
  { name: "ZK Proofs",           color: "from-fuchsia-500 to-pink-400" },
];

const socials = [
  { icon: Github,   href: "https://github.com/arijitroy667",                    label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arijit-roy-148109314",   label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/ARIJITROY115058",                      label: "Twitter" },
];

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-gray-50/80 dark:bg-charcoal-800 relative overflow-hidden">
      {/* subtle decorative circle */}
      <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-overline">01 &nbsp;About</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="p-1 rounded-full bg-gradient-to-br from-primary-500 via-secondary-400 to-accent-500 shadow-2xl shadow-primary-500/20 max-w-[280px] mx-auto">
                <div className="rounded-full overflow-hidden bg-white group relative">
                  <motion.img
                    src="/ArijitRoyImg.png"
                    alt="Arijit Roy"
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:brightness-50"
                    whileHover={{ scale: 1.08 }}
                  />
                  {/* Hover social overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
                    {socials.map((s) => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="bg-white p-3 rounded-full text-primary-600 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={s.label}
                      >
                        <s.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">
                    Open to work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-gray-600 dark:text-charcoal-100 font-light leading-relaxed text-lg">
              <p>
                I'm a <strong className="text-gray-900 dark:text-white font-semibold">Full-Stack & GenAI Engineer</strong> bridging
                autonomous AI, scalable backends, and advanced Web3 protocols.
                Currently a BTech student at LNMIIT and an intern at Tata Steel.
              </p>
              <p>
                I build production-grade multi-agent systems and verifiable DeFi
                infrastructure — a frequent builder at global hackathons including
                Meta-PyTorch OpenEnv and Google Cloud. My core drive is turning
                complex architectural challenges into resilient, high-impact products.
              </p>
            </div>

            {/* Skill chips */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-charcoal-300 mb-4">
                Core stack
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  hidden: {},
                }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={{
                      hidden:  { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="relative group cursor-default"
                  >
                    <span className="relative z-10 inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-charcoal-500 bg-white dark:bg-charcoal-700 text-gray-700 dark:text-charcoal-100 transition-all duration-200 group-hover:border-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {skill.name}
                    </span>
                    {/* Glow on hover */}
                    <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r ${skill.color} blur-sm`} />
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
