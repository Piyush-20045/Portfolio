import x from "../../assets/socials/x.png";
import gmail from "../../assets/socials/gmail.png";
import github from "../../assets/socials/github.png";
import linkedin from "../../assets/socials/linkedin.png";

// HERO BUTTON
export const HeroButton = ({ link, target, icon, title }) => {
  return (
    <a
      href={link}
      target={target}
      className="px-3 py-1.5 flex justify-center items-center gap-2 font-base text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-neutral-900 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
    >
      {icon}
      {title}
    </a>
  );
};

// SOCIAL ICONS DATA
export const SocialLinks = [
  {
    icon: <img src={linkedin} alt="linkedin" className="w-8 md:w-9" />,
    href: "https://tinyurl.com/yPiyush",
    label: "Linkedin",
    hoverColor: "hover:text-blue-700",
  },
  {
    icon: <img src={github} alt="github" className="w-8 md:w-9" />,
    href: "https://github.com/Piyush-20045",
    label: "Github",
    hoverColor: "hover:text-black dark:hover:text-gray-400",
  },
  {
    icon: <img src={gmail} alt="Email" className="w-8 md:w-9" />,
    href: "mailto:piyushyadav20045@gmail.com",
    label: "Email",
    hoverColor: "hover:text-red-600",
  },
  {
    icon: <img src={x} alt="X" className="w-8 md:w-9" />,
    href: "https://x.com/Piyush9436",
    label: "Twitter",
    hoverColor: "hover:text-sky-500",
  },
];
