import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="px-4 md:px-8 py-20 scroll-mt-8">
      <motion.div
        className="text-start mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          My Projects
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold max-w-2xl">
          Here are some of the projects I'm proud of. Each one was a unique
          challenge and a great learning experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
