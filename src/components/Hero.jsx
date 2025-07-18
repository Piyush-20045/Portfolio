const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center md:gap-5 text-gray-800 dark:text-gray-200">
      {/* Profile Image with Gradient Border */}
      <div className="md:mb-0 mb-5 w-fit p-1 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500">
        <img
          className="w-36 md:w-52 bg-gray-500 rounded-full border-white border-4 transition-all duration-300 hover:scale-105 cursor-pointer"
          src="/heroPiyush2.jpg"
        />
      </div>
      <div className="text-center md:text-start ml-3 mr-2">
        {/* TITLE and DESCRIPTION */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Hey, I'm Piyush. <br />{" "}
          <span className="text-gray-400">
            A Full-Stack Software Developer.
          </span>
        </h1>
        <p className="mt-3 text-lg text-gray-400 max-w-xl">
          I build scalable and efficient web applications from front to back.
          Passionate about creating seamless user experiences with modern
          technologies like React, Node.js, and everything in between.
        </p>

        {/* Location and Socials */}
        <div className="mt-8 mx-3 md:mx-0 md:mt-6 flex justify-between text-gray-400 text-sm md:text-base">
          <span className="flex text-gray-500">
            <img className="w-5 h-5 bg-gray-300" src="/location.svg" />
            &nbsp;Mumbai, India.
          </span>
          <div className="flex gap-2 md:gap-6 mr-2 md:mr-12">
            <a
              className="flex items-center font-medium hover:text-gray-200 active:underline"
              href="https://www.linkedin.com/in/piyush-yadav-a4b164260/"
            >
              <img className="w-5 h-5 bg-white" src="/linkedin.svg" />
              &nbsp;Linkedin
            </a>
            <a
              className="flex items-center font-medium hover:text-gray-200 active:underline"
              href="https://github.com/Piyush-20045"
            >
              <img
                className="w-5 h-5 rounded-full bg-white"
                src="/github.svg"
              />
              &nbsp;Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
