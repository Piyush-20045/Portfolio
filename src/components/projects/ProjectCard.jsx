import { motion } from "framer-motion";
import { Lens } from "../../ui/lightswind/lens";
import { BiGlobe } from "react-icons/bi";
import { LuLoaderPinwheel } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import ProjectDetails from "./ProjectDetails";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/lightswind/dialog";

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
        <div className="flex justify-between">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {project.title}
          </h3>

          {/* Links */}
          <div className="flex gap-2 text-gray-700 dark:text-gray-300">
            {project.status === "In Progress" ? null : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id="social-tooltip"
                data-tooltip-content="Live"
              >
                <BiGlobe size={24} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="social-tooltip"
              data-tooltip-content="Source code"
            >
              <FiGithub size={22} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 font-medium line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="h-12 mt-3 flex flex-wrap gap-1.5 text-xs">
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

        {/* In Progress status */}
        {project.status === "In Progress" ? (
          <div className="w-full flex justify-end">
            <div className="px-2 py-1 flex gap-1.5 text-sm font-medium text-gray-800 bg-teal-100 rounded-md">
              <LuLoaderPinwheel className="w-4 h-4 animate-spin [animation-duration:5s] text-teal-600" />
              <span className="text-gray-700">In Progress</span>
            </div>
          </div>
        ) : (
          <div className="w-full mt-2 flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                {/* More details btn */}
                <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm cursor-pointer hover:underline underline-offset-4 group">
                  More details
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </DialogTrigger>
              <DialogContent className="md:p-8 max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-100/90 dark:bg-neutral-900/90">
                <DialogHeader className="mb-4">
                  <DialogTitle className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                <ProjectDetails project={project} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
