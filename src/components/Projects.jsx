import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { Lens } from "../ui/lightswind/lens";

const Projects = () => {
  return (
    <section id="projects" className="md:px-14 lg:px-36 px-4 py-20 scroll-mt-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          My Creative Work
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold max-w-2xl mx-auto">
          Here are some of the projects I'm proud of. Each one was a unique
          challenge and a great learning experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow-black dark:shadow-amber-100 overflow-hidden hover:shadow-sm transition-shadow duration-300 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, type: "spring" }}
            whileHover={{ scale: 1.02 }}
          >
            <Lens zoomFactor={2} lensSize={150}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </Lens>
            <div className="h-fit p-5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {project.description}
              </p>
              <div className="h-14 mt-3 flex flex-wrap gap-2 text-xs">
                {project.tags.map((tech, i) => (
                  <span
                    key={i}
                    className="h-fit px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-12 flex justify-between">
                <a
                  href={project.liveUrl}
                  className="px-2 flex items-center gap-1 font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-sm text-white rounded cursor-pointer transition-all hover:underline shadow-purple-100 hover:shadow-sm active:scale-95 select-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/link.svg" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="px-2 py-2 flex items-center gap-1 font-bold bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 rounded cursor-pointer transition-all border-gray-500 border-r-2 border-b-4 hover:underline shadow-amber-100 hover:shadow-sm active:scale-95 select-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/github.svg" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
