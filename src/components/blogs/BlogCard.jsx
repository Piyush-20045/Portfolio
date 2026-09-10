import { BiCalendar } from "react-icons/bi";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

const BlogCard = ({ blog }) => {
  return (
    <article className="group grid gap-5 border-b border-slate-100 py-6 last:border-b-0 dark:border-neutral-900 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-7">
      <div className="min-w-0">
        <h3 className="text-xl font-semibold leading-tight text-slate-900 transition-colors group-hover:text-slate-600 dark:text-white dark:group-hover:text-slate-300">
          {blog.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-neutral-400">
          {blog.desc}
        </p>

        <div className="flex justify-between">
          <div className="mt-2.5 flex items-center gap-4 h-fit text-xs font-medium text-slate-500 dark:text-neutral-400 md:gap-5">
            {/* Date and readTime */}
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <BiCalendar size={16} aria-hidden="true" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <FiClock size={15} aria-hidden="true" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Read Article Btn */}
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn flex w-fit shrink-0 items-center gap-2 justify-self-end rounded-lg px-3.5 py-2 text-xs font-medium text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:text-slate-200 dark:focus-visible:outline-white"
          >
            Read Article
            <FiArrowUpRight
              size={14}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
