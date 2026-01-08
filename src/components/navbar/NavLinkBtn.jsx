// Navigation Links Component
export const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative group font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-zinc-300 transition-colors duration-300"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neutral-600 dark:bg-zinc-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </a>
);

// Navlinks DATA
export const navLinksData = [
  { href: "#home", text: "Home" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];
