import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  // FRAMER MOTION VARIANTS
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 1 },
  };
  return (
    <div
      id="home"
      className="min-h-screen py-20 flex flex-col md:flex-row justify-center items-center md:gap-5 text-gray-800 dark:text-gray-200"
    >
      {/* Profile Image with Gradient Border */}
      <div className="md:mb-0 mb-5 w-fit p-1 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500">
        <img
          className="w-36 md:w-52 bg-gray-500 rounded-full border-white border-4 transition-all duration-300 hover:scale-105 cursor-pointer"
          src="/hero.jpeg"
        />
      </div>
      <div className="text-center md:text-start ml-3 mr-2">
        {/* TITLE and DESCRIPTION */}
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Hey, I'm Piyush. <br />{" "}
          <span className="text-gray-800 dark:text-gray-300">
            A Full-Stack Software Developer.
          </span>
        </h1>
        <p className="mt-3 font-medium text-lg text-gray-900 dark:text-gray-300 max-w-xl">
          I build scalable and efficient web applications from front to back.
          Passionate about creating seamless user experiences with modern
          technologies like React, Node.js, and everything in between.
        </p>

        {/* Location and Socials */}
        <div className="mt-8 mx-3 md:mx-0 md:mt-6 flex justify-between text-sm md:text-base">
          <span className="flex text-gray-700 dark:text-gray-400">
            <img
              className="w-5 h-5 bg-gray-300 dark:bg-gray-400 rounded"
              src="/location.svg"
            />
            &nbsp;Mumbai, India.
          </span>
          <div className="flex gap-3 md:gap-6 md:mr-12 text-gray-600 dark:text-gray-400">
            <motion.a
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center font-medium hover:text-blue-700 dark:hover:text-blue-700 active:underline"
              href="https://www.linkedin.com/in/piyush-yadav-a4b164260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} className="hover:text-blue-700" />
              &nbsp;Linkedin
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center font-medium hover:text-black dark:hover:text-gray-200 active:underline"
              href="https://github.com/Piyush-20045"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
              &nbsp;Github
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
