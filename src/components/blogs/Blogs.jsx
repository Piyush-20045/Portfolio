import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogsData } from "../../data/blogsData";

const Blogs = () => {
  return (
    <section className="w-full px-4 py-16 md:px-8 scroll-mt-8">
      {/* TITLE and DESC */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Blogs
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mb-10 max-w-2xl">
          Thoughts, insights, and experiences from my learning journey
        </p>
      </motion.div>

      {/* BLOGS CARD */}
      <div className="grid md:grid-cols-2 gap-10">
        {BlogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
