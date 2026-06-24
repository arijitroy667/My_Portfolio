import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, Twitter, ArrowDown } from "lucide-react";
import KnowledgeGraph from "./KnowledgeGraph";

const IDENTITY_WORDS = ["Engineer.", "Builder.", "Hacker.", "Founder."];
const WORD_DURATION = 2200; // ms each word is shown

const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter effect
  useEffect(() => {
    const target = IDENTITY_WORDS[wordIndex];

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, WORD_DURATION);
      return;
    }

    if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % IDENTITY_WORDS.length);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 45);
    } else {
      if (displayed.length === target.length) {
        setIsPaused(true);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
      }, 90);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, isPaused, wordIndex]);

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github,   href: "https://github.com/arijitroy667/",                    label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arijit-roy-148109314",    label: "LinkedIn" },
    { icon: Twitter,  href: "https://x.com/ARIJITROY115058",                       label: "Twitter" },
    { icon: Mail,     href: "mailto:arijitroy0445@gmail.com",                      label: "Email" },
  ];

  // Gradient word color cycles per index
  const wordColors = ["gradient-text", "text-gray-900 dark:text-white", "gradient-text-warm", "text-gray-900 dark:text-white"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-charcoal-900"
    >
      {/* ── Animated Mesh Background ─────────────────────────── */}
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* ── Subtle grid pattern overlay ──────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Two-column layout ──────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Text content ─────────────────────────── */}
          <div>
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-overline mb-8"
            >
              Fullstack × Gen AI Engineer
            </motion.div>

            {/* ── Big stacked headline ─────────────────────────── */}
            <div className="space-y-2 mb-10">
              {/* Static first line */}
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                Arijit Roy
              </motion.h1>

              {/* Typewriter line */}
              <div className="relative">
                {/* Invisible structural placeholder to lock height and prevent layout shift */}
                <div className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-tight font-extrabold tracking-tight flex items-end opacity-0 pointer-events-none select-none">
                  <span className="pb-4 pr-1">Eg</span>
                  <span className="typewriter-cursor mb-4" />
                </div>
                
                {/* Actual typewriter text */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-tight font-extrabold tracking-tight flex items-end absolute inset-0"
                >
                  <span className={`${wordColors[wordIndex]} pb-4 pr-1`}>
                    {displayed}
                  </span>
                  <span className="typewriter-cursor mb-4" />
                </motion.div>
              </div>

              {/* Subline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-500 dark:text-charcoal-200 font-sans font-light max-w-xl mt-6 leading-relaxed"
              >
                Building multi-agent systems, scalable backends, and
                production-grade AI infrastructure. Turning complex architecture
                into shipped, resilient products.
              </motion.p>
            </div>

            {/* ── CTA row ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1A0wLTRBUGrBvFzN5QUF616a6jMhudK-x/view?usp=sharing"
                  )
                }
                className="shimmer-btn text-white px-7 py-3.5 rounded-xl font-medium flex items-center gap-2 text-sm shadow-lg shadow-primary-500/30"
              >
                <Download size={17} />
                Download CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3.5 rounded-xl font-medium text-sm border-2 border-teal-400/60 text-teal-600 dark:text-teal-400 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* ── Socials ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.07 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-charcoal-700 text-gray-500 dark:text-charcoal-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-200"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}

              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-charcoal-300">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Knowledge Graph ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block relative w-full aspect-square max-w-[600px] mx-auto"
          >
            <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden border border-white/40 dark:border-white/[0.06] shadow-2xl shadow-teal-500/10">
              <KnowledgeGraph />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToNext}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-charcoal-300">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
