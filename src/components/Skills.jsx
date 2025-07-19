import { motion } from "framer-motion";

// Logos
import jsLogo from "../assets/skills/js.png";
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import bootstrapLogo from "../assets/skills/bootstrap.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import reactLogo from "../assets/skills/react.png";
import framerLogo from "../assets/skills/motion.png";
import routerLogo from "../assets/skills/router.png";
import nodeLogo from "../assets/skills/node.png";
import expressLogo from "../assets/skills/express.png";
import mongoLogo from "../assets/skills/mongodb.png";
import firebaseLogo from "../assets/skills/firebase.png";
import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/skills/github.png";
import vsCodeLogo from "../assets/skills/vs.png";
import postmanLogo from "../assets/skills/postman.png";

// Skill Categories
const frontendSkills = [
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "Bootstrap", icon: bootstrapLogo },
  { name: "React", icon: reactLogo },
  { name: "React Router", icon: routerLogo },
  { name: "Framer Motion", icon: framerLogo },
];

const backendSkills = [
  { name: "Node.js", icon: nodeLogo },
  { name: "Express.js", icon: expressLogo },
  { name: "MongoDB", icon: mongoLogo },
  { name: "Firebase", icon: firebaseLogo },
];

const toolSkills = [
  { name: "Git", icon: gitLogo },
  { name: "GitHub", icon: githubLogo },
  { name: "VsCode", icon: vsCodeLogo },
  { name: "Postman", icon: postmanLogo },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Reusable SkillGrid Component
const SkillGrid = ({ title, skills }) => (
  <div className="p-4 m-1 mb-12 md:mb-0 md:bg-gray-900 flex flex-col items-center rounded-3xl border shadow-md shadow-amber-50">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
      {title}
    </h3>
    <motion.div
      className="w-fit flex flex-wrap justify-center gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="w-20 h-20 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-indigo-500/20 transition-shadow duration-300 flex flex-col items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.05 }}
        >
          <img
            className="mb-1.5 w-5 rounded"
            src={skill.icon}
            alt={skill.name}
          />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <section id="skills" className="w-full md:px-14 lg:px-32 py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies I Work With
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From frontend frameworks to backend databases and dev tools, here's
          what I use to bring web ideas to life.
        </motion.p>

        <div className="md:flex">
          <SkillGrid title="Frontend" skills={frontendSkills} />
          <SkillGrid title="Backend" skills={backendSkills} />
          <SkillGrid title="Tools & Platforms" skills={toolSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
