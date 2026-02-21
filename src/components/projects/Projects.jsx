import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/lightswind/dialog";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Map categories from data to filter options
  const categoryMap = {
    all: "all",
    frontend: "frontend",
    "full-stack": "full-stack",
    "in-progress": "in-progress",
  };

  // Filter projects based on selected category
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === categoryMap[selectedCategory];
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "full-stack", label: "Fullstack" },
    { id: "in-progress", label: "In Progress" },
  ];

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
        {projectsData.slice(0, 4).map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
      <div className="mt-12 w-full flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-1.5 text-neutral-900 dark:text-neutral-100 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-xs shadow-black dark:shadow-white border transition-all duration-300 active:scale-95">
              See more projects
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-6 !bg-white dark:!bg-black">
            <DialogHeader className="mb-4">
              <DialogTitle className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                MORE PROJECTS
              </DialogTitle>

              {/* Category Filters */}
              <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                          : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredProjects.length} items
                </span>
              </div>
            </DialogHeader>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredProjects.map((project, index) => (
                <div key={index}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
