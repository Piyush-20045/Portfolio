// HERO BUTTON
export const HeroButton = ({ link, target, icon, title, primary = false }) => {
  return (
    <a
      href={link}
      target={target}
      className={`px-4 py-[9px] flex justify-center items-center gap-2 font-semibold text-sm rounded-lg cursor-pointer transition-all duration-300 ${
        primary
          ? "neu-btn-primary"
          : "neu-btn text-gray-800 dark:text-gray-100 font-semibold"
      }`}
    >
      <span className="text-[17px]">{icon}</span>
      {title}
    </a>
  );
};
