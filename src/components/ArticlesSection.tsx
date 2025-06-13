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
      title: "Ethereum V/S Bitcoin: A Comprehensive Comparison",
      excerpt:
        "Dive deep into the differences, similarities, and unique features of Ethereum and Bitcoin.",
      image: "/BTC_ETH.jpg",
      category: "General",
      readTime: "2 min read",
      date: "Oct 26, 2024",
      link: "https://medium.com/@arijitroy0445/ethereum-vs-bitcoin-0df6323b6826",
      tags: ["BTC", "ETH", "Ecosystem"],
    },
    {
      title: "Reliance Jio partners with Polygon",
      excerpt:
        "Reliance Jio Platforms Limited (JPL), a subsidiary of Reliance Industries Limited, has entered into a strategic partnership with Polygon Labs",
      image: "/Reliance.jpg",
      category: "News",
      readTime: "2 min read",
      date: "Jan 16, 2025",
      link: "https://medium.com/@arijitroy0445/reliance-jio-partners-with-polygon-to-enable-web-3-0-in-india-63714a592118",
      tags: ["Web 3.0", "Trends", "Polygon"],
    },
    {
      title: "Layers 2 Blockchains",
      excerpt:
        "An overview of Layer 2 blockchains and their role in the Ethereum ecosystem.",
      image: "/Layer2.jpg",
      category: "General",
      readTime: "2 min read",
      date: "Jan 14, 2025",
      link: "https://medium.com/@arijitroy0445/layers-2-blockchains-59a02528ccb9",
      tags: ["Layer 2", "Blockchain Trilemma", "ZKs"],
    },
    {
      title: "ERC-20 Token : A revolutionary token standard",
      excerpt:
        "ERC-20 Tokens: The Building Blocks of Ethereum’s Digital Economy.",
      image: "/ERC20.jpg",
      category: "ERCs",
      readTime: "5 min read",
      date: "Mar 15, 2025",
      link: "https://medium.com/@arijitroy0445/erc-20-token-a-revolutionary-token-standard-8e1be7de8bbb",
      tags: ["ERC-20", "Solidity", "Smart Contracts"],
    },
    {
      title: "ERC-223: A Smarter Upgrade to ERC-20",
      excerpt: "ERC-223 Tokens: The Next Step in Ethereum’s Token Evolution.",
      image: "/ERC223.jpg",
      category: "ERCs",
      readTime: "3 min read",
      date: "Mar 17, 2025",
      link: "https://medium.com/@arijitroy0445/erc-223-a-smarter-upgrade-to-erc-20-0dd2f70be4f2",
      tags: ["ERC-20", "ERC-223", "Solidity", "Smart Contracts"],
    },
    {
      title: "ERC-4626 : “The story of Tokenized Vaults”",
      excerpt: "ERC-4626 Tokens: The Future of Tokenized Vaults in DeFi.",
      image: "/ERC4626.jpg",
      category: "ERCs",
      readTime: "4 min read",
      date: "Mar 19, 2025",
      link: "https://medium.com/@arijitroy0445/erc-4626-the-story-of-tokenized-vaults-1339c6310752",
      tags: ["ERC-4626", "Vaults", "Solidity", "Smart Contracts"],
    },
    {
      title:
        "ERC-7575: Solving ERC-4626’s Limitations and Unlocking Investment Diversification",
      excerpt:
        "ERC-7575 Tokens: Enhancing the Functionality of Tokenized Vaults.",
      image: "/ERC7575.jpg",
      category: "ERCs",
      readTime: "4 min read",
      date: "Mar 24, 2025",
      link: "https://medium.com/@arijitroy0445/erc-7575-solving-erc-4626s-limitations-and-unlocking-investment-diversification-d76f1714b2ab",
      tags: ["ERC-7575", "Multi-token Vaults", "Solidity", "Smart Contracts"],
    },
    {
      title: "ERC-2535: The Diamond Standard",
      excerpt:
        "ERC-2535 Tokens: The Diamond Standard for Smart Contract Organization.",
      image: "/ERC2535.jpg",
      category: "ERCs",
      readTime: "3 min read",
      date: "Apr 14, 2025",
      link: "https://medium.com/@arijitroy0445/erc-2535-the-diamond-standard-fc1e59c40437",
      tags: ["ERC-2535", "Diamond Standard", "Solidity", "Smart Contracts"],
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
    {
      title: "Vaultopia: Advanced Yield Generation Vault",
      excerpt:
        "Vaultopia represents a groundbreaking approach to decentralized yield generation, built as a minimum viable product (MVP) that demonstrates the potential of sophisticated DeFi protocols.",
      image: "/Vaultopia_docs.jpg",
      category: "De-fi",
      readTime: "10 min read",
      date: "May 29, 2025",
      link: "https://medium.com/@arijitroy0445/vaultopia-advanced-yield-generation-vault-f881410d49c2",
      tags: ["USDC", "Lido", "DeFi", "Vault", "Yield Aggregator"],
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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <Filter className="text-gray-400 my-auto mr-2" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors text-sm ${
                activeFilter === category
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
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
