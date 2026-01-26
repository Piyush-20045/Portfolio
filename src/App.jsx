import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { DotBackground } from "./ui/lightswind/grid-dot-backgrounds.tsx";
import { Tooltip } from "react-tooltip";
import Footer from "./components/Footer.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Experience from "./components/experience/Experience.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // convert string to boolean
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // 404 NOT FOUND PAGE
  const path = window.location.pathname;
  const VALID_PATHS = ["/"];
  if (!VALID_PATHS.includes(path)) {
    return (
      <div
        className={`${
          darkMode ? "dark" : ""
        } bg-gray-50 dark:bg-gray-950 transition-all duration-300`}
      >
        <NotFound />;
      </div>
    );
  }

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
        <div className="mx-2 max-w-[850px] bg-white dark:bg-black">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Blogs />
          <Contact />
          <Footer />
        </div>

        {/* REACT TOASTIFY */}
        <ToastContainer position="top-right" autoClose={3000} />
        {/* REACT TOOLTIP */}
        <Tooltip
          id="social-tooltip"
          className="!px-2.5 !py-1 !text-sm !rounded-lg !dark:bg-white !dark:text-black"
        />
      </DotBackground>
    </div>
  );
}

export default App;
