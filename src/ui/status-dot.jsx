const StatusDot = () => {
  return (
    <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
      {/* Expanding filled light-green circle */}
      <span className=" absolute size-3 rounded-full bg-green-300 animate-[pulse-ring_2s_ease-out_infinite]" />

      {/* Solid green center dot */}
      <span className="relative z-10 size-2.5 shrink-0 rounded-full bg-green-400" />

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          70% {
            transform: scale(2.5);
            opacity: 0;
          }

          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default StatusDot;
