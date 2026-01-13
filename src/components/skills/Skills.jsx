import { motion } from "framer-motion";
import { skills } from "../../data/skillsData";
import SkillCard from "./SkillCard";

// Main Skills Component
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 px-4 md:px-8 scroll-mt-8 border-y border-slate-200 dark:border-neutral-800"
    >
      <div className="container mx-auto text-start">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 dark:text-gray-300 font-semibold mb-10 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From frontend frameworks to backend databases and dev tools, here's
          what I use.
        </motion.p>

        {/* Skills Grid */}
        <section className="w-full flex items-start justify-start flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              src={skill?.icon}
              name={skill?.name}
              index={index}
              id={skill.name}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Skills;
