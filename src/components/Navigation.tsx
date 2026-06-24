import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Articles",   href: "#articles" },
  { name: "Journey",    href: "#journey" },
  { name: "Contact",    href: "#contact" },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);
  const [activeSection, setActiveSection]   = useState("home");

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = navItems.map((i) => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-xl border-b border-gray-100/80 dark:border-white/[0.04] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("#home")}
            className="font-display text-xl font-extrabold gradient-text tracking-tight"
          >
            AR
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-500 dark:text-charcoal-200 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-300"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenu(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-charcoal-700 text-gray-600 dark:text-charcoal-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-card rounded-2xl mb-4 p-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.name}
                      whileHover={{ x: 6 }}
                      onClick={() => scrollTo(item.href)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30"
                          : "text-gray-600 dark:text-charcoal-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-charcoal-700"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;