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
    "vibe-coded": "vibe-coded",
  };

  // Filter projects based on selected category
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === categoryMap[selectedCategory];
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "full-stack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
    { id: "vibe-coded", label: "Vibe Coded" },
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

      {/* Dialog modal*/}
      <div className="mt-12 w-full flex justify-center">
        <Dialog>
          {/* More Projects btn */}
          <DialogTrigger asChild>
            <button className="neu-btn px-6 py-2.5 text-neutral-900 dark:text-neutral-100 font-semibold rounded-xl cursor-pointer">
              See more projects
            </button>
          </DialogTrigger>

          {/* ALL PROJECTS */}
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-neutral-100/90 dark:bg-neutral-900/90 backdrop-blur-md">
            <DialogHeader className="mb-4">
              <DialogTitle className="mb-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                MORE PROJECTS
              </DialogTitle>

              {/* Category Filters */}
              <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-800 pb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 ${
                        selectedCategory === category.id
                          ? "neu-pressed text-black dark:text-white font-bold"
                          : "neu-btn text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
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
