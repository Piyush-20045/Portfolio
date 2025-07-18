import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Navigation Links Component
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative group text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </a>
);

// Main Navbar Component
const Navbar = () => {
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
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav
      className={`md:px-14 lg:px-24 bg-amber-950 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            className="flex items-center gap-1 text-2xl text-white font-bold"
            href="/"
          >
            <motion.img
              className="h-10 w-10 rounded-full"
              src="/logo.jpeg"
              whileHover={{
                rotate: 360,
                transition: {
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                },
              }}
            />
            Piyush
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            <div className=" space-x-8 mx-10">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </div>
            <a
              href="#resume"
              className="px-3 py-1 text-white bg-gray-800 transition-all duration-300 transform shadow-gray-700 shadow hover:bg-gray-700 active:scale-95"
            >
              Resume
            </a>
          </div>

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
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-900 px-6 py-2 pb-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a
            href="#resume"
            className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300 w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
