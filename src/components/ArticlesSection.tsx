import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ExternalLink, Filter } from "lucide-react";

const ArticlesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const articles = [
    {
      title: "The Trillion-Dollar Irony: How the Jevons Paradox is Quietly Breaking the AI Economy",
      excerpt:
        "Why the AI boom is heading for a cliff: Unpacking the Jevons Paradox and the brutal physics of compute.",
      image: "/Jevons_Paradox.png",
      category: "General",
      readTime: "7 min read",
      date: "May 28, 2026",
      link: "https://medium.com/@arijitroy0445/the-trillion-dollar-irony-how-the-jevons-paradox-is-quietly-breaking-the-ai-economy-922a28ce009a",
      tags: ["Jevons Paradox", "AI", "Economy"],
    },   
    {
      title: "Order book DEXs V/S Automated market makers(AMMs)",
      excerpt:
        "A deep dive into the mechanics, benefits, and drawbacks of order book DEXs compared to AMMs.",
      image: "/AMM.jpg",
      category: "De-fi",
      readTime: "4 min read",
      date: "May 23, 2025",
      link: "https://medium.com/@arijitroy0445/order-book-dexs-v-s-automated-market-makers-amms-1176d11dcb26",
      tags: ["Order-Book", "AMM", "DeFi", "Exchanges"],
    },
    {
      title: "FAQ: AMMs and DEX Mechanisms",
      excerpt:
        "A comprehensive FAQ covering key concepts and mechanisms in Automated Market Makers (AMMs) and decentralized exchanges (DEXs).",
      image: "/FAQ.jpg",
      category: "De-fi",
      readTime: "5 min read",
      date: "May 25, 2025",
      link: "https://medium.com/@arijitroy0445/faq-amms-and-dex-mechanisms-4ac91d0d23b4",
      tags: ["MEV attacks", "AMM", "DeFi", "Exchanges"],
    },
  ];

  const categories = ["All", "General", "News", "ERCs", "De-fi"];

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  return (
    <section id="articles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development,
            design, and technology trends
          </p>
        </motion.div>

        

        {/* Articles Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={article.link}
                    className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={article.link}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read Article
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://medium.com/@arijitroy0445"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            View All Articles
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
