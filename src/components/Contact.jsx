import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

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

// LOGIC for sending message
const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm("portfolio_172301", "template_z27x0vw", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      form.current.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("error in sending message", error);
      toast.error("Error! Message not sent");
    }
  };

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
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Get In Touch
        </h2>
        <p className="mx-3 mt-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendMail}
        className="w-11/12 md:w-4/6 lg:w-3/6 mx-3 mt-5 px-4 sm:px-6 md:px-12 py-8 flex flex-col gap-4 border border-gray-400 rounded-2xl bg-gray-300 dark:bg-gray-900"
      >
        <div className="flex flex-col ">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg focus:outline-blue-600"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg  focus:outline-blue-600"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-100">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your message here..."
            className="block w-full p-3 bg-gray-50 dark:bg-gray-200 border border-gray-300 rounded-lg resize-none focus:outline-blue-600"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-5 px-6 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Send Message
        </button>

        {/* SPAN DESIGN */}
        <div className="my-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-400" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 font-medium">
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
      </motion.form>
      {/* FOOTER */}
      <footer className="text-center mt-16 mx-9 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-400">
        Thanks for scrolling! 👋 - Built by Piyush Yadav © 2025
      </footer>
    </div>
  );
};

export default Contact;
