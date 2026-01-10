import { motion } from "framer-motion";
import { Lens } from "../../ui/lightswind/lens";
import { TbLoader2 } from "react-icons/tb";
import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ project, index }) => {
  return (
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
        <p className="min-h-32 text-gray-700 dark:text-gray-300 font-medium">
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
        <div className="mt-6 h-10 flex justify-between">
          {project.status === "In Progress" ? (
            <div className="px-3 py-2 flex items-center gap-2 text-sm font-medium text-green-600 bg-teal-100 rounded-md">
              <TbLoader2 className="w-4 h-4 animate-spin" />
              <span>In Progress</span>
            </div>
          ) : (
            <a
              href={project.liveUrl}
              className="px-2 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded hover:bg-gray-100 dark:hover:bg-neutral-900 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
              target="_blank"
            >
              <BiGlobe size={20} />
              Live Website
            </a>
          )}
          <a
            href={project.githubUrl}
            className="px-2 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded hover:bg-gray-100 dark:hover:bg-neutral-900 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={20} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
