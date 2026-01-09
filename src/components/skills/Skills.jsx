import { motion } from "framer-motion";
import {
  frontendSkills,
  backendSkills,
  toolSkills,
  Languages,
} from "../../data/skillsData";
import { FaCode } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Reusable SkillGrid Component
const SkillGrid = ({ title, logo, skills }) => (
  <div
    id="skills"
    className="p-4 m-1 mb-12 md:mb-0 bg-gray-100 dark:bg-gray-900 dark:md:bg-gray-900 flex flex-col items-center rounded-3xl border-gray-200 shadow-md shadow-gray-500 dark:shadow-amber-50"
  >
    <h3 className="w-full flex justify-center items-center gap-1 text-lg font-semibold text-gray-800 dark:text-white pb-2 mb-6 text-center border-b border-gray-400">
      {logo}
      {title}
    </h3>
    <motion.div
      className="p-1 w-fit flex flex-wrap justify-center gap-5 max-h-54 overflow-auto"
      variants={containerVariants}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="bg-gray-50 dark:bg-gray-800 w-fit p-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-indigo-500/20 transition-shadow duration-300 flex gap-2 items-center justify-center"
          whileHover={{ y: -8, scale: 1.05 }}
        >
          <img className="w-5 rounded" src={skill.icon} alt={skill.name} />
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
    <section
      id="skills"
      className="w-full md:px-12 lg:px-32 py-20 px-4 scroll-mt-8"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies I Work With
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 dark:text-gray-300 font-semibold mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From frontend frameworks to backend databases and dev tools, here's
          what I use.
        </motion.p>

        <div className="md:flex">
          <SkillGrid title="Languages" logo={<FaCode />} skills={Languages} />
          <SkillGrid
            title="Frontend"
            logo={<RiPaintFill />}
            skills={frontendSkills}
          />
          <SkillGrid
            title="Backend"
            logo={<CiServer />}
            skills={backendSkills}
          />
          <SkillGrid title="Tools" logo={<VscTools />} skills={toolSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
