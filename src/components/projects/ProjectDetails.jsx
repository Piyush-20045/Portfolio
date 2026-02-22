import { BiGlobe } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectDetails = ({ project = {} }) => {
  const {
    title = "",
    image = "",
    description = "",
    tags = [],
    features = [],
    whatILearned = [],
    liveUrl = "",
    githubUrl = "",
  } = project;

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Description */}
      <div>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Technologies */}
      {tags && tags.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {(liveUrl || githubUrl) && (
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-950 shadow-xs shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
            >
              <BiGlobe size={18} />
              Visit
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 flex justify-center items-center gap-2 text-sm font-base text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-950 shadow-xs shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95"
            >
              <FiGithub size={18} />
              Source Code
            </a>
          )}
        </div>
      )}

      {/* Features and What I Learned Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Features
          </h3>
          {features && features.length > 0 ? (
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className="text-black dark:text-white">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              No features listed.
            </p>
          )}
        </div>

        {/* What I Learned */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            What I Learned
          </h3>
          {whatILearned && whatILearned.length > 0 ? (
            <ul className="space-y-2">
              {whatILearned.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className="text-black dark:text-white">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              No learning points provided.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
