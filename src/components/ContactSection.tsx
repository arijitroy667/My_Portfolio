import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arijitroy0445@gmail.com",
    href: "mailto:arijitroy0445@gmail.com",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Arijit Roy",
    href: "https://www.linkedin.com/in/arijit-roy-148109314",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, IND",
    href: "https://maps.app.goo.gl/spQt4BJv3JnKXtKu9",
    color: "from-emerald-500 to-teal-400",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-charcoal-500 bg-gray-50 dark:bg-charcoal-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-charcoal-300 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20 dark:focus:ring-primary-500/20 transition-all duration-200 font-sans text-sm";

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      const t = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-charcoal-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-primary-100 dark:bg-primary-900/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-secondary-100 dark:bg-secondary-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-overline">06 &nbsp;Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's Build Something
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-charcoal-200 font-light max-w-2xl">
            Always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <p className="text-gray-600 dark:text-charcoal-100 font-light leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want
              to say hello — I'd love to hear from you. I typically respond within 24 hours.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-sm flex-shrink-0`}>
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-400 dark:text-charcoal-300 mb-0.5">{info.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Available for</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-charcoal-200">
                {["Full-time opportunities", "Freelance projects", "Technical consulting", "Speaking engagements"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-charcoal-200">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-gray-400 dark:text-charcoal-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange} required
                        className={inputClass} placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-gray-400 dark:text-charcoal-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className={inputClass} placeholder="you@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-gray-400 dark:text-charcoal-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text" id="subject" name="subject"
                      value={formData.subject} onChange={handleChange} required
                      className={inputClass} placeholder="What's this about?"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-400 dark:text-charcoal-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      required rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or idea..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-sm transition-all ${
                      state.submitting
                        ? "bg-gray-300 dark:bg-charcoal-600 text-gray-500 cursor-not-allowed"
                        : "shimmer-btn text-white shadow-lg shadow-primary-500/25"
                    }`}
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
