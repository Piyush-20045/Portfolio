import { useEffect, useState } from "react";

function Visitors() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Check if the image can load (detect ad blocker)
    const img = new Image();
    img.onerror = () => setIsBlocked(true);
    img.src = "https://piyushh.goatcounter.com/counter.svg";
  }, []);

  // Don't show if blocked by ad blocker
  if (isBlocked) return null;

  return (
    <div className="px-2 py-1 mb-2 text-sm text-neutral-500 dark:text-neutral-400 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
      👀 Total Visits:
      <img
        src="https://piyushh.goatcounter.com/counter.svg"
        alt="visit counter"
        className="inline ml-1 h-4"
      />
    </div>
  );
}

export default Visitors;
