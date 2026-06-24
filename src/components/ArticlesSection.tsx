import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ExternalLink, ArrowUpRight } from "lucide-react";

const categoryColor: Record<string, string> = {
  General: "from-violet-500 to-purple-400",
  "De-fi":  "from-emerald-500 to-teal-400",
  News:     "from-blue-500 to-cyan-400",
  ERCs:     "from-orange-500 to-amber-400",
};

const categoryBorder: Record<string, string> = {
  General: "border-violet-400",
  "De-fi":  "border-emerald-400",
  News:     "border-blue-400",
  ERCs:     "border-orange-400",
};

const articles = [
  {
    title: "The Trillion-Dollar Irony: How the Jevons Paradox is Quietly Breaking the AI Economy",
    excerpt: "Why the AI boom is heading for a cliff: Unpacking the Jevons Paradox and the brutal physics of compute.",
    image: "/Jevons_Paradox.png",
    category: "General",
    readTime: "7 min read",
    date: "May 28, 2026",
    link: "https://medium.com/@arijitroy0445/the-trillion-dollar-irony-how-the-jevons-paradox-is-quietly-breaking-the-ai-economy-922a28ce009a",
    tags: ["Jevons Paradox", "AI", "Economy"],
  },
  {
    title: "Order book DEXs V/S Automated Market Makers (AMMs)",
    excerpt: "A deep dive into the mechanics, benefits, and drawbacks of order book DEXs compared to AMMs.",
    image: "/AMM.jpg",
    category: "De-fi",
    readTime: "4 min read",
    date: "May 23, 2025",
    link: "https://medium.com/@arijitroy0445/order-book-dexs-v-s-automated-market-makers-amms-1176d11dcb26",
    tags: ["Order-Book", "AMM", "DeFi"],
  },
  {
    title: "FAQ: AMMs and DEX Mechanisms",
    excerpt: "A comprehensive FAQ covering key concepts and mechanisms in AMMs and decentralized exchanges.",
    image: "/FAQ.jpg",
    category: "De-fi",
    readTime: "5 min read",
    date: "May 25, 2025",
    link: "https://medium.com/@arijitroy0445/faq-amms-and-dex-mechanisms-4ac91d0d23b4",
    tags: ["MEV attacks", "AMM", "DeFi"],
  },
];

const ArticlesSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="articles" className="py-24 bg-white dark:bg-charcoal-900 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[600px] h-[300px] rounded-full bg-accent-100 dark:bg-accent-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-overline">04 &nbsp;Articles</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            What I Write
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-charcoal-200 font-light">
            Sharing insights on AI, DeFi, and the intersection of both
          </p>
        </motion.div>

        {/* Cards grid with colored left-border accent */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col border-l-4 ${categoryBorder[article.category]} transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-black/30`}>

                  {/* Image */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block text-[10px] font-mono font-medium px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${categoryColor[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                    {/* Arrow icon on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 bg-white/90 rounded-full text-gray-800">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-charcoal-300 font-mono mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-charcoal-200 leading-relaxed flex-1 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-charcoal-600 text-gray-500 dark:text-charcoal-200 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://medium.com/@arijitroy0445"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shimmer-btn text-white px-8 py-3 rounded-xl font-medium text-sm shadow-lg shadow-primary-500/25"
          >
            View All on Medium
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
