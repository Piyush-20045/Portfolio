import { motion } from "framer-motion";
import { Lens } from "../../ui/lightswind/lens";
import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { LuLoaderPinwheel } from "react-icons/lu";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={index}
      className="bg-gray-100 dark:bg-neutral-900 rounded-xl shadow-none overflow-hidden hover:shadow-md transition-shadow duration-300 border-2 border-gray-200 dark:border-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <Lens zoomFactor={2} lensSize={150}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </Lens>

      {/* Content */}
      <div className="h-fit p-5">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 font-medium line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
          {project.tags.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="h-fit px-1.5 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
          <span className="h-fit px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
            {project.tags.length > 4 ? "+" + (project.tags.length - 4) : ""}
          </span>
        </div>

        {/* Links */}
        <div className="mt-6 h-9 flex justify-between">
          {project.status === "In Progress" ? (
            <div className="px-3 py-2 flex items-center gap-1 text-sm font-medium text-gray-800 bg-teal-100 rounded-md">
              <LuLoaderPinwheel className="w-4 h-4 animate-pulse text-teal-600" />
              <span>In Progress</span>
            </div>
          ) : (
            <a
              href={project.liveUrl}
              className="px-2 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-950 shadow-xs shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
              target="_blank"
            >
              <BiGlobe size={20} />
              Live Website
            </a>
          )}
          <a
            href={project.githubUrl}
            className="px-2 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-950 shadow-xs shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
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
