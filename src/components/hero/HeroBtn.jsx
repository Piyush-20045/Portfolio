// HERO BUTTON
export const HeroButton = ({ link, target, icon, title, primary = false }) => {
  return (
    <a
      href={link}
      target={target}
      className={`px-5 py-2.5 flex justify-center items-center gap-2.5 font-semibold text-sm rounded-xl cursor-pointer transition-all duration-300 ${
        primary
          ? "neu-btn-primary"
          : "neu-btn text-gray-800 dark:text-gray-100 font-semibold"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {title}
    </a>
  );
};
