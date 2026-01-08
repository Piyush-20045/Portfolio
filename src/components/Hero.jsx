import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypingText } from "../ui/lightswind/typing-text";
import { SiGmail } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import x from "../assets/socials/x.png";

const Hero = ({ darkMode }) => {
  // ICONS DATA
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://tinyurl.com/yPiyush",
      label: "Linkedin",
      hoverColor: "hover:text-blue-700",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Piyush-20045",
      label: "Github",
      hoverColor: "hover:text-black dark:hover:text-gray-400",
    },
    {
      icon: <SiGmail />,
      href: "mailto:piyushyadav20045@gmail.com",
      label: "Gmail",
      hoverColor: "hover:text-red-600",
    },
    {
      icon: <img src={x} alt="X" className="w-8 h-8 text-white"/>,
      href: "https://x.com/Piyush9436",
      label: "Twitter",
      hoverColor: "hover:text-sky-500",
    },
  ];
  // FRAMER MOTION VARIANTS
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 1 },
  };
  // Add a custom style for the tooltip in dark mode
  const tooltipStyles = {
    dark: {
      backgroundColor: "white",
      color: "black",
    },
  };

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center md:gap-5 text-gray-800 dark:text-gray-200"
    >
      {/* Profile Image with Gradient Border */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:ml-6 mb-5 md:mb-0 w-fit p-1 rounded-full"
      >
        <img
          className="w-36 md:w-56 rounded-full transition-all duration-300 ease-in-out bg-blue-300 dark:bg-zinc-300 hover:scale-105 cursor-pointer"
          src="/hero.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:text-start ml-3 mr-2"
      >
        {/* TITLE and DESCRIPTION */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white">
          Hey, I'm Piyush Yadav. <br />
          <TypingText
            duration={2}
            align="center"
            className="text-neutral-500 dark:text-neutral-400"
          >
            A Full Stack web developer.
          </TypingText>
        </h1>
        <p className="mt-3 font-semibold dark:font-medium text-lg text-gray-700 dark:text-gray-400 max-w-xl">
          I build scalable and efficient web applications from front to back.
          Passionate about creating seamless user experiences with modern
          technologies like React.js, Next.js, PostgreSQL and everything in
          between.
        </p>

        {/* Location and Socials */}
        <div className="mt-8 mx-3 md:mx-0 md:mt-6 flex justify-between text-sm md:text-base">
          <span className="flex text-gray-800 dark:text-gray-400">
            <img
              className="w-5 h-5 bg-gray-300 dark:bg-gray-400 rounded"
              src="/location.svg"
            />
            &nbsp;Mumbai, India.
          </span>

          {/* Social Links Section */}
          <div className="flex gap-5 md:gap-6 md:mr-12 text-gray-700 dark:text-gray-400">
            {socialLinks.map((social) => {
              return (
                <motion.a
                  key={social.name}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`flex items-center font-medium text-gray-700 dark:text-white text-xl md:text-2xl transition-colors duration-300 ${social.hoverColor}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id="social-tooltip"
                  data-tooltip-content={social.label}
                >
                  {social.icon}
                </motion.a>
              );
            })}
          </div>
          <Tooltip
            id="social-tooltip"
            className="!px-2.5 !py-1 !text-sm !rounded-lg !dark:bg-white !dark:text-black"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
