import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiGlobe } from "react-icons/bi";

const ExperienceCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
        {/* Left Side: Date & Logo (Desktop) */}
        <div className="hidden md:flex flex-col items-end w-48 flex-shrink-0 pt-1 text-right">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
            {item.date}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
            {item.location}
          </span>
        </div>

        {/* Right Side: Content Card */}
        <div className="flex-grow w-full">
          <div className="bg-slate-50 dark:bg-neutral-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 overflow-hidden">
            {/* Header / Trigger Area */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-5 md:p-6 cursor-pointer flex justify-between items-start select-none"
            >
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                  <BiGlobe
                    size={22}
                    className="text-slate-700 dark:text-slate-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-1">
                    <span className="font-medium">{item.company}</span>
                    <span>•</span>
                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 pl-2">
                {/* Mobile Date */}
                <div className="md:hidden text-right mb-1">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    {item.date}
                  </span>
                </div>

                {/* Chevron */}
                <div
                  className={`text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 md:px-6 pb-6 pt-0">
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mb-4"></div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-6 ml-1">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
