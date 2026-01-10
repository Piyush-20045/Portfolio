import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Form from "./Form";

// ICONS from react-icons
const socialLinks = [
  {
    icon: <SiGmail />,
    href: "mailto:piyushyadav20045@gmail.com",
    label: "Gmail",
    hoverColor: "hover:text-red-600",
  },
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
    icon: <FaTwitterSquare />,
    href: "https://x.com/Piyush9436",
    label: "Twitter",
    hoverColor: "hover:text-sky-500",
  },
];

const Contact = () => {
  // FRAMER MOTION VARIANTS
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div
      id="contact"
      className="pt-20 pb-8 flex flex-col justify-center items-center scroll-mt-8"
    >
      {/* TITLE and DESCRIPTION */}
      <motion.div
        className="ml-4 md:ml-0 mb-4 text-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Get In Touch!
        </h2>
        <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-11/12 md:w-4/6 lg:w-4/6 mx-3 mt-5 px-4 sm:px-6 md:px-12 py-8 flex flex-col gap-4 border border-gray-400 rounded-2xl"
      >
        {/* FORM */}
        <Form />

        {/* SPAN DESIGN */}
        <div className="my-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-neutral-400 dark:bg-gray-300 dark:text-gray-600 text-gray-100 font-medium">
                Or find me on
              </span>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center gap-7">
          {socialLinks.map((social, index) => (
            <motion.a
              variants={socialIconVariants}
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="social-tooltip"
              data-tooltip-content={social.label}
              className={`text-gray-700 dark:text-white text-3xl md:text-4xl transition-colors duration-300 ${social.hoverColor}`}
              whileHover="hover"
              whileTap="tap"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer className="text-center mt-16 mx-9 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-400">
        Thanks for scrolling! 👋 - Built by Piyush Yadav © 2025
      </footer>
    </div>
  );
};

export default Contact;
