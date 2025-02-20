import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateStars = (num, width, height) => {
  return Array.from({ length: num }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));
};

function StarryBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const updateStars = () => {
      setStars(generateStars(100, window.innerWidth, window.innerHeight));
    };

    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}

export default StarryBackground;
