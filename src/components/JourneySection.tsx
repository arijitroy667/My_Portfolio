import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Award, Code, Rocket, Users, Trophy } from "lucide-react";

const JourneySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: "Jul 2025",
      title: "Uniswap Hook Incubator 6",
      description:
        "Selected for the Uniswap Hook Incubator 6, building a DeFi protocol on Uniswap V4.",
      icon: Code,
      color: "from-green-500 to-blue-500",
      achievements: ["Upcoming"],
    },
    {
      year: "May 2025",
      title: "Chainlink Chromion Hackathon",
      description:
        "Developing a RWA protocol that provides loans taking RWA as collateral.",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Tokenized Real-World Assets",
        "Lending with automated EMI payments setup",
        "Built using Chainlink's CCIP and Automation",
      ],
    },
    {
      year: "Apr 2025",
      title: "Vaultopia",
      description:
        "Developed a decentralized Vault to securely deposit USDC and generate yield via Lido V3.",
      icon: Rocket,
      color: "from-blue-500 to-indigo-500",
      achievements: [
        "Built MVP in 2 months with intensive research on protocols",
        "Testing-Deployed on Ethereum Hoodi alongwith USDC Faucet",
        "Future-Integration with Aave and Compound to maximize yield",
      ],
    },
    {
      year: "Jan 2025",
      title: "LNMHacks 7.0",
      description:
        "Participated in my first hackathon, collaborating with a team to build a dapp in 72 hours.",
      icon: Star,
      color: "from-pink-500 to-red-500",
      achievements: [
        "Developed a decentralized Chess game",
        "With betting and ranking system",
        "Made with Move on Aptos chain",
      ],
    },
    {
      year: "2024",
      title: "Member of Cipher club",
      description:
        "Joined the Cipher club, a community of top developers and tech enthusiasts. Engaged in exclusive workshops and networking events.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Organized 2 Hands-on workshops on ERC-20 tokens",
        "Organized Roastathon event with senior developers",
        "Learnt blockchain basics to foundry development @EVM",
      ],
    },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones and achievements that have shaped my career and
            passion for technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <milestone.icon
                        size={24}
                        className="text-gray-700 dark:text-gray-300"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div
                      className={`${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <span
                        className={`inline-block px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-sm font-bold rounded-full mb-3`}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {milestone.description}
                      </p>

                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? 20 : -20,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + idx * 0.1 + 0.5,
                            }}
                            className={`flex items-center gap-2 ${
                              index % 2 === 0 ? "justify-end" : "justify-start"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for opposite side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "1+", label: "Years Experience" },
            { number: "250+", label: "GitHub Contributions" },
            { number: "80+", label: "Article Views" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
