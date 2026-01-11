import { useEffect, useState } from "react";

function Visitors() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await fetch("/api/visits");
        if (!res.ok) return;
        const data = await res.json();
        setVisits(data.total);
      } catch (err) {
        console.error("Error in fetching visits", err);
      }
    };

    fetchVisits();
  }, []);
  console.log(visits);

  return (
    <div className="px-2 py-1 mb-2 text-sm text-neutral-500 dark:text-neutral-400 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
      👀 Total Visits: <b>{visits ?? "⚠️"}</b>
    </div>
  );
}

export default Visitors;
