import { useEffect, useState, useRef } from "react";

function Visitors() {
  const [visits, setVisits] = useState(null);
  const hasRecorded = useRef(false);

  useEffect(() => {
    const recordVisit = async () => {
      // Prevent double execution in React StrictMode
      if (hasRecorded.current) return;
      hasRecorded.current = true;

      try {
        // Increment the counter on each visit
        const response = await fetch("/api/visits", {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to record visit");
        }

        const data = await response.json();
        setVisits(data.total);
      } catch (error) {
        console.error("Error recording visit:", error);

        // Fallback: just get the count without incrementing
        try {
          const response = await fetch("/api/visits");
          const data = await response.json();
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
