import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";

const BlogCard = ({ blog, key }) => {
  return (
    <motion.div
      className="group flex flex-col h-full bg-gray-100 dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-slate-200 dark:border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: key * 0.1, duration: 1, type: "spring" }}
    >
      {/* Badge */}
      {blog.isFeatured && (
        <div className="mb-4">
          <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-black dark:group-hover:text-neutral-400 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {blog.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 mt-auto border-t border-slate-300 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 text-slate-500 dark:text-slate-500 text-xs md:text-sm">
          <div className="flex items-center gap-0.5 md:gap-1">
            <BiCalendar size={17} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-0.5 md:gap-1">
            <FiClock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center md:gap-1 text-slate-600 md:text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs md:text-sm font-medium transition-colors"
        >
          Read Article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
