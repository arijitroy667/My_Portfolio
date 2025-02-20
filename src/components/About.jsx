import React from "react";
import Intro from "./About_elements/Intro";
import Tech from "./About_elements/Tech";
import Experiance from "./About_elements/Experiance";
import Milestone from "./About_elements/Milestone";
import ScrollProgress from "../components/Home_elements/ScrollProgress";
import StarryBackground from "./StarryBg";

function About() {
  return (
    <div className="relative bg-gray-950 text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Starry Background */}
      <StarryBackground />

      {/* Content */}
      <div className="relative px-8 py-16 min-h-screen">
        <Intro />
        <Tech />
        <Experiance />
        <Milestone />
      </div>
    </div>
  );
}

export default About;
