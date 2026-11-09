// Navigation Links Component
export const NavLink = ({ href, icon, children, className = "", onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative flex items-center gap-[5px] group font-normal text-[14px] text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 ${className}`}
  >
    <img src={icon} alt="" className="pb-0.5 w-4.5 h-4.5 dark:invert" />
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
    href: "#blog",
    text: "Blogs",
    icon: "/nav-icons/blog.svg",
  },
];
