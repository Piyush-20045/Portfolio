import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // convert string to boolean
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-950 transition-all duration-300`} >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* REACT TOASTIFY */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
