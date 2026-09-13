import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "react-github-calendar/tooltips.css";

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getActivity = (activity) => {
  const date = formatDate(activity.date);
  if (activity.count === 0) return `No contributions on ${date}`;
  const noun = activity.count === 1 ? "contribution" : "contributions";
  return `${activity.count} ${noun} on ${date}`;
};

const GithubHeatmap = ({ compact = false, className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    if (typeof document !== "undefined") {
      const root = document.documentElement;

      const updateScheme = () => {
        const isDark = root.classList.contains("dark");
        setColorScheme(isDark ? "dark" : "light");
      };

      updateScheme();

      const observer = new MutationObserver(() => {
        updateScheme();
      });

      observer.observe(root, { attributes: true, attributeFilter: ["class"] });

      return () => observer.disconnect();
    }
  }, []);

  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <div
        className={`w-full ${
          compact ? "h-[120px]" : "h-[160px]"
        } rounded-xl bg-muted animate-pulse ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full overflow-x-auto overscroll-x-contain pb-2 ${className}`}
    >
      <motion.div
        className="w-max rounded-xl border border-slate-200/60 bg-transparent transition-shadow duration-300 hover:shadow-sm dark:border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${
            compact ? "p-2" : "p-3"
          } hover:scale-[1.005] transition-transform duration-300 inline-block`}
        >
          <GitHubCalendar
            username="piyush-20045"
            fontSize={12}
            blockSize={11}
            blockMargin={compact ? 1 : 2.5}
            theme={theme}
            colorScheme={colorScheme}
            tooltips={{
              activity: {
                text: getActivity,
                withArrow: true,
                hoverRestMs: 0,
                transitionStyles: { duration: 0.05 },
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubHeatmap;
