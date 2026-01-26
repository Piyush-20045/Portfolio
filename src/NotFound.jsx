import { IoMdReturnLeft } from "react-icons/io";

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden relative">
      <div className="mt-12 md:mt-0 max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Error Message */}
          <div className="space-y-4 text-gray-900 dark:text-white">
            <h2 className="text-7xl md:text-8xl font-bold">404</h2>
            <h3 className="text-4xl lg:text-5xl font-bold">
              Oops! Lost in Space
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
              The page you're looking for has floated away into the digital
              void. Let's get you back on track!
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 px-6 py-4 font-semibold text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95 cursor-pointer"
          >
            <IoMdReturnLeft />
            Back to Home
          </button>
        </div>

        {/* Right Side - 404 Image */}
        <div className="relative">
          <div className="relative p-8">
            {/* Image */}
            <img
              src="/404-computer.svg"
              alt="404 - Person at computer showing error"
              className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
            />

            {/* Floating 404 Badge */}
            <div className="absolute top-12 right-1 md:top-6 md:right-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Not Found
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-12 text-gray-500 dark:text-gray-400/60 text-sm">
        "The journey of a thousand miles begins with a single step... back to
        the{" "}
        <a href="/" className="font-medium underline">
          homepage
        </a>
        "
      </div>
    </div>
  );
};

export default NotFound;
