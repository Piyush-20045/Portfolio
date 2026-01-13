import { ExperienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="w-full px-4 py-16 md:px-8 scroll-mt-8 border-y border-slate-200 dark:border-neutral-800">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Experience
      </h2>
      <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mb-10 max-w-2xl">My professional journey and hands-on experience</p>

      <div className="relative space-y-8">
        {/* Vertical Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-[12.5rem] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />

        {ExperienceData.map((item) => (
          <div key={item.id} className="relative">
            {/* Timeline Dot (Desktop) */}
            <div className="hidden md:block absolute left-[12.5rem] top-8 w-3 h-3 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-400 rounded-full -translate-x-[5px] z-10" />

            <ExperienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
