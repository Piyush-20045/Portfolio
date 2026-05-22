// Navigation Links Component
export const NavLink = ({ href, icon, children }) => (
  <a
    href={href}
    className="relative flex items-center gap-1.5 group font-normal text-[15px] text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors duration-200"
  >
    <img
      src={icon}
      className="w-4.5 h-4.5 transition-all duration-200 ease-in-out dark:invert"
    />
    {children}
  </a>
);

// Navlinks DATA
export const navLinksData = [
  {
    href: "#experience",
    text: "Experience",
    icon: "/nav-icons/experience.svg",
  },
  {
    href: "#projects",
    text: "Projects",
    icon: "/nav-icons/projects.svg",
  },
  {
    href: "#skills",
    text: "Skills",
    icon: "/nav-icons/skills.svg",
  },
  {
    href: "#contact",
    text: "Contact",
    icon: "/nav-icons/contact.svg",
  },
];
