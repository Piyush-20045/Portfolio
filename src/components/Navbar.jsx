import { useState } from "react";
import { motion } from "framer-motion";
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

  const navLinks = [
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 max-w-4xl mx-auto">
      <div className="mt-2 mx-3 md:mx-6 px-6 py-2 border dark:border-b-white rounded-md dark:shadow-lg dark:shadow-neutral-900 shadow-xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home">
            <motion.img
              className="h-11 w-11 bg-blue-300 rounded-md transition-all duration-300 ease-in-out hover:scale-90 dark:bg-zinc-300"
              src="/hero.png"
              whileHover="hover"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden pl-20 text-gray-800 dark:text-white md:flex justify-center items-center space-x-7 lg:space-x-12">
            {/* mapping navlilnks array */}
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            <a
              href="https://drive.google.com/file/d/1gC2wTk0MHAVnK8YRHs_2ANIoEi_2PmPo/view?usp=drive_link"
              target="_blank"
              className="px-3 py-1.5 font-base text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-950 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-4">
            {/* Mobile Menu Button */}
            <div className="mt-1 md:hidden">
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
              }}
              className={`flex justify-center items-center md:ml-20 w-9 h-9 px-1 py-1 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 border border-neutral-200/60 dark:border-neutral-800 shadow shadow-black dark:shadow-white transition-all duration-300 ease-in-out active:scale-95`}
            >
              <span
                className={`p-1 transition-transform duration-300 ${
                  darkMode
                    ? "rotate-0 text-gray-300"
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
        className={`mt-1 mx-3 rounded-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="backdrop-blur-md py-2 pb-4 flex flex-col items-center space-y-4 border-b dark:border-b-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out active:scale-95 active:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1gC2wTk0MHAVnK8YRHs_2ANIoEi_2PmPo/view?usp=drive_link"
            target="_blank"
            className="mb-9 px-3 py-1.5 text-white bg-gray-800 transition-all duration-300 rounded shadow-md hover:bg-gray-700 shadow-black dark:shadow dark:shadow-amber-100 active:shadow-none active:scale-95"
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
