import { motion } from "framer-motion";
import { TypingText } from "../../ui/lightswind/typing-text";
import { BsSend } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

import { HeroButton } from "./HeroBtn";
import { SocialLinks } from "../../data/socialLinks";
import { GrLocation } from "react-icons/gr";

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
  const Skill = ({ children }) => (
    <span className="text-sm px-1.5 font-semibold border-[1px] border-neutral-500/70 border-dashed rounded-md bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white">
      {children}
    </span>
  );

  return (
    <div
      id="home"
      className="min-h-screen mb-16 flex flex-col justify-center md:gap-5 text-gray-800 dark:text-gray-200"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 md:ml-6 mb-5 md:mb-0 w-fit p-1 rounded-full"
      >
        <img
          className="w-36 md:w-36 rounded-full transition-all duration-300 ease-in-out bg-blue-300 dark:bg-zinc-300 hover:scale-105 cursor-pointer"
          src="/hero.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-start md:text-start px-4 md:px-8"
      >
        {/* TITLE and DESCRIPTION */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white">
          Hey, I'm Piyush 👋 -{" "}
          <TypingText
            duration={2}
            align="center"
            className="text-neutral-500 dark:text-neutral-400"
          >
            A Full Stack developer.
          </TypingText>
        </h1>
        <p className="mt-3 font-medium text-[17px] text-gray-700 dark:text-gray-400 ">
          I build scalable and efficient web applications from frontend to
          backend.
          <br />I specialize in <Skill>Typescript</Skill> ,{" "}
          <Skill>Next.js</Skill> , <Skill>MERN</Skill> stack ,{" "}
          <Skill>PostgreSQL</Skill> and many other technologies for creating
          full-stack web applications.
        </p>
        <p className="mt-3 font-medium text-[17px] text-gray-700 dark:text-gray-400 ">
          Full-stack by skill, but obsessed with learning new skills and I love
          to play{" "}
          <a
            href="https://www.chess.com/member/ypiyush17"
            target="_blank"
            className="text-sm px-1.5 font-semibold border-[1px] border-neutral-500/70 border-dashed rounded-md bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white cursor-pointer"
          >
            chess
          </a>{" "}
          .
        </p>

        {/* Location and Socials */}
        <div className="mt-4 flex justify-between items-center text-sm md:text-base">
          <span className="flex text-gray-800 dark:text-gray-400">
            <GrLocation className="w-5 h-5" />
            &nbsp;Mumbai, India.
          </span>

          {/* Social Links Section */}
          <div className="flex gap-2 md:gap-3 md:mr-12 text-gray-700 dark:text-gray-400">
            {SocialLinks.map((social) => {
              return (
                <motion.a
                  key={social.label}
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
        </div>

        {/* RESUME and GET-IN-TOUCH BUTTONS */}
        <div className="mt-4 md:ml-0 flex gap-4">
          <HeroButton
            link={
              "https://drive.google.com/file/d/1TSrr3pzfG4T4y8nwbYpYoEbwq4FerV69/view?usp=drive_link"
            }
            target={"_blank"}
            icon={<FiFileText />}
            title={"Resume"}
          />
          <HeroButton
            link={"/#contact"}
            target={""}
            icon={<BsSend />}
            title={"Get in touch"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
