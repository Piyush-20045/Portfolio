import { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogsData } from "../../data/blogsData";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredBlogs = BlogsData.slice(-2);
  const remainingBlogs = BlogsData.slice(0, -2);

  return (
    <section className="w-full px-4 py-14 md:px-8 scroll-mt-8">
      {/* TITLE and DESC */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
          Blogs
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 font-medium mb-10 max-w-2xl">
          Thoughts, insights, and experiences from my learning journey
        </p>
      </div>

      <div className="border-y border-slate-100 dark:border-neutral-900">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

        {remainingBlogs.length > 0 && (
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
              showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              {remainingBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>

      {remainingBlogs.length > 0 && (
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="neu-btn px-4 py-[9px] text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer"
          >
            {showAll ? "Show fewer blogs" : "Show more blogs"}
            {showAll ? <FiChevronUp size={17} /> : <FiChevronDown size={17} />}
          </button>
        </div>
      )}
    </section>
  );
};

export default Blogs;
