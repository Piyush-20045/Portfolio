import { useState } from "react";
import { motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";
import { NavLink, navLinksData } from "./NavLinkBtn";

// Main Navbar Component
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 max-w-[819px] mx-auto">
      <div className="px-3 md:px-6 py-[11px] dark:shadow-lg dark:shadow-neutral-900 shadow-xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home">
            {/* <motion.img
              className="h-11 w-11 bg-white rounded-md transition-all duration-300 ease-in-out hover:scale-90 dark:bg-neutral-950"
              src="/hero1.png"
              whileHover="hover"
            /> */}
            <span className="text-2xl font-semibold md:font-medium text-gray-800 dark:text-white font-logo">
              PIYUSH
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden pl-20 text-gray-800 dark:text-white md:flex justify-center items-center space-x-12">
            {/* mapping navlilnks array */}
            {navLinksData.map((link) => (
              <NavLink key={link.href} href={link.href} icon={link.icon}>
                {link.text}
              </NavLink>
            ))}
          </div>

          <div className="flex gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="neu-icon-btn p-1.5 rounded-lg flex items-center justify-center text-gray-800 dark:text-white cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <svg
                  className="w-6 h-6"
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
                      !isOpen
                        ? "M4 6h16M4 12h16m-7 6h7"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  ></path>
                </svg>
              </button>
            </div>

            {/* DARK MODE btn */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                new Audio("/click.mp3").play();
              }}
              className="neu-icon-btn flex justify-center items-center md:ml-20 w-9 h-9 rounded-lg cursor-pointer text-gray-800 dark:text-gray-200 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              <span
                className={`p-1 transition-transform duration-300 ${
                  darkMode
                    ? "rotate-0 text-gray-200"
                    : "rotate-90 text-gray-800"
                }`}
              >
                {darkMode ? (
                  <LuMoon size={18} strokeWidth={2} />
                ) : (
                  <LuSun size={18} strokeWidth={2} />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mt-1 mx-1 rounded-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="backdrop-blur-md py-2 pb-4 flex flex-col items-center space-y-4 border-b dark:border-b-white">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 py-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-200 ease-in-out active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              <NavLink key={link.href} href={link.href} icon={link.icon}>
                {link.text}
              </NavLink>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
