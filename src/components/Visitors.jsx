import { useEffect, useState, useRef } from "react";

function Visitors() {
  const [visits, setVisits] = useState(null);
  const hasRecorded = useRef(false);

  useEffect(() => {
    const recordVisit = async () => {
      // Prevent double execution in React StrictMode
      if (hasRecorded.current) return;
      hasRecorded.current = true;

      // Increment the counter on each visit
      const now = Date.now();
      const COOLDOWN_MS = 60 * 60 * 1000;
      const STORAGE_KEY = "portfolio_last_visit_at";

      let shouldIncrement = false;

      try {
        const last = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
        shouldIncrement = !Number.isFinite(last) || now - last >= COOLDOWN_MS;

        const res = await fetch("/api/visits", {
          method: shouldIncrement ? "POST" : "GET",
        });
        const data = await res.json();
        setVisits(data.total);

        if (shouldIncrement)
          window.localStorage.setItem(STORAGE_KEY, String(now));
      } catch (error) {
        try {
          const res = await fetch("/api/visits");
          const data = await res.json();
          setVisits(data.total);
        } catch (fallbackError) {
          console.error("Fallback failed:", fallbackError);
        }
      }
    };

    recordVisit();
  }, []);

  if (visits === null) return null;

  return (
    <div className="px-2 py-1 mb-2 text-sm text-neutral-500 dark:text-neutral-400 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
      👀 Total Visits: <b>{visits.toLocaleString()}</b>
    </div>
  );
}

export default Visitors;
