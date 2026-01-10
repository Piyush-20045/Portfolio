import { motion } from "framer-motion";
import Form from "./Form";
import { SocialLinks } from "../../data/socialLinks";

const Contact = () => {
  // FRAMER MOTION VARIANTS
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div
      id="contact"
      className="pt-20 pb-8 flex flex-col justify-center items-center scroll-mt-8"
    >
      {/* TITLE and DESCRIPTION */}
      <motion.div
        className="ml-4 md:ml-0 mb-4 text-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Get In Touch!
        </h2>
        <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-11/12 md:w-4/6 lg:w-4/6 mx-3 mt-5 px-4 sm:px-6 md:px-12 py-8 flex flex-col gap-4 border border-gray-400 rounded-2xl"
      >
        {/* FORM */}
        <Form />

        {/* SPAN DESIGN */}
        <div className="my-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-neutral-400 dark:bg-gray-300 dark:text-gray-600 text-gray-100 font-medium">
                Or find me on
              </span>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center gap-4 md:gap-5">
          {SocialLinks.map((social, index) => (
            <motion.a
              variants={socialIconVariants}
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="social-tooltip"
              data-tooltip-content={social.label}
              className={`text-gray-700 dark:text-white text-3xl md:text-4xl transition-colors duration-300 ${social.hoverColor}`}
              whileHover="hover"
              whileTap="tap"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
