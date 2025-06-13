import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import JourneySection from "./components/JourneySection";
import ContactSection from "./components/ContactSection";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ParticleBackground />
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ArticlesSection />
          <JourneySection />
          <ContactSection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
