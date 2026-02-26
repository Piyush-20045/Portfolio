import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className={`w-full ${className}`}>
      <motion.div
        className="w-fit rounded-xl bg-transparent backdrop-blur-none border border-slate-200/60 dark:border-neutral-800 hover:shadow-sm transition-shadow duration-300 overflow-hidden"
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
            className="!w-[300px] sm:!w-[560px] md:!w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubHeatmap;
