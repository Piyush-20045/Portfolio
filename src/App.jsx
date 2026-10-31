"use client";

import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import { useState, useEffect } from "react";
import { DotBackground } from "./ui/lightswind/grid-dot-backgrounds.tsx";
import { Tooltip } from "react-tooltip";
import Footer from "./components/Footer.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Experience from "./components/experience/Experience.jsx";
import Chatbot from "./components/chatbot/Chatbot.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode") === "true");
    setThemeReady(true);
  }, []);

  // Sync dark class to <html> so portaled content (e.g. Dialog) gets dark: styles
  useEffect(() => {
    if (!themeReady) return;
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode, themeReady]);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } bg-gray-50 dark:bg-gray-950 transition-all duration-300`}
    >
      {/* Dot Background */}
      <DotBackground
        dotSize={1}
        dotColor="#d4d4d4"
        darkDotColor="#404040"
        spacing={30}
        showFade={true}
        fadeIntensity={80}
        className="h-full"
      >
        <div className="mx-auto w-full min-w-0 max-w-[820px] bg-white dark:bg-black md:border-x border-slate-200 dark:border-neutral-800">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero darkMode={darkMode} />
          <Experience />
          <Projects />
          <Skills />
          <Blogs />
          <Contact />
          <Footer />
        </div>

        {/* REACT TOOLTIP */}
        <Tooltip
          id="social-tooltip"
          className="!px-2.5 !py-1 !text-sm !rounded-lg !dark:bg-white !dark:text-black z-50"
        />
      </DotBackground>
      <Chatbot />
    </div>
  );
}

export default App;
