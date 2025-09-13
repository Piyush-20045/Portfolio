import { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";

// Navigation Links Component
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative group font-semibold text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </a>
);

// Main Navbar Component
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav
      className={`lg:px-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b dark:border-b-white shadow-xl dark:shadow-xl dark:shadow-gray-900 ${
        isScrolled
          ? "dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl dark:shadow-2xl"
          : "bg-gray-100 dark:bg-gray-950"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            className="flex items-center gap-1 text-2xl text-gray-800 dark:text-white font-bold font-logo"
            href="#home"
            whileHover="hover"
            rotate="rest"
          >
            <motion.img
              className="h-10 w-10 rounded-full"
              src="/logo.jpeg"
              variants={{
                hover: {
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  },
                  rest: { rotate: 0 },
                },
              }}
            />
            Piyush
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden pl-20 text-gray-800 dark:text-white md:flex justify-center items-center space-x-7 lg:space-x-12">
            {/* mapping navlilnks array */}
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            <a
              href="#resume"
              className="px-3 py-1.5 text-white bg-gray-800 transition-all duration-300 rounded shadow-md hover:bg-gray-700 shadow-black dark:shadow dark:shadow-amber-100 active:shadow-none active:scale-95"
            >
              Resume
            </a>
          </div>

          {/* DARK MODE btn */}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className={`hidden md:flex w-14 px-1 py-1 rounded-full cursor-pointer shadow shadow-black dark:shadow-white transition-colors duration-300 ease-in-out ${
              darkMode ? "bg-indigo-600" : "bg-sky-300"
            }`}
          >
            <span
              className={`p-1 bg-white rounded-full transition-transform duration-400 ${
                darkMode
                  ? "translate-x-6 text-yellow-600"
                  : "translate-x-0 text-blue-700"
              }`}
            >
              {darkMode ? <LuSun /> : <LuMoon />}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-800 dark:text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-900 px-6 py-2 pb-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out active:scale-95 active:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a
            href="#resume"
            className="mb-9 px-3 py-1.5 text-white bg-gray-800 transition-all duration-300 rounded shadow-md hover:bg-gray-700 shadow-black dark:shadow dark:shadow-amber-100 active:shadow-none active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className={`w-14 px-1 py-1 rounded-full cursor-pointer shadow shadow-black dark:shadow-white transition-colors duration-300 ease-in-out flex ${
              darkMode ? "bg-indigo-600" : "bg-sky-300"
            }`}
          >
            <span
              className={`p-1 bg-white rounded-full transition-transform duration-400 ${
                darkMode
                  ? "translate-x-6 text-yellow-600"
                  : "translate-x-0 text-blue-700"
              }`}
            >
              {darkMode ? <LuSun /> : <LuMoon />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
