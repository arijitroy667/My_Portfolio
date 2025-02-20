import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPos = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPos / totalHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-950 z-50">
      <div
        className="h-full bg-emerald-500 transition-all duration-150"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
