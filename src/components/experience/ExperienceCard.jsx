import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";

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
            {item.type}
          </span>
        </div>

        {/* Right Side: Content Card */}
        <div className="flex-grow w-full">
          <div className="bg-slate-50 dark:bg-neutral-900/40 rounded-2xl border border-slate-200 dark:border-neutral-900! hover:border-slate-300 dark:hover:border-slate-600 overflow-hidden">
            {/* Header / Trigger Area */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer select-none p-4 md:flex md:items-start md:justify-between md:p-5"
            >
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                  <LuBriefcaseBusiness
                    size={22}
                    className="text-slate-700 dark:text-slate-300"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium whitespace-nowrap">
                      {item.company}
                    </span>
                    <span className="hidden md:inline" aria-hidden="true">
                      •
                    </span>
                    <span className="bg-slate-200 dark:bg-neutral-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-3 dark:border-neutral-800 md:mt-0 md:flex-col md:items-end md:gap-1 md:border-0 md:p-0">
                {/* date and type of job for MOBILE screen */}
                <div className="flex flex-col md:hidden text-xs text-slate-500 dark:text-slate-400 md:text-right">
                  <span className="block whitespace-nowrap font-bold text-slate-700 dark:text-slate-300">
                    {item.date}
                  </span>
                  <span className="mt-0.5 block font-medium md:mt-1">
                    {item.type}
                  </span>
                </div>

                {/* Chevron */}
                <div
                  className={`neu-icon-btn shrink-0 p-1.5 rounded-lg text-slate-700 dark:text-slate-200 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                    <div className="h-px w-full bg-slate-200 dark:bg-neutral-900 mb-4"></div>

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
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-white dark:bg-neutral-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold shadow-sm"
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
