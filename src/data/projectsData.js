import blognest from "../assets/projects/blognest.png";
import myJournal from "../assets/projects/myJournal.png";
import portfolio from "../assets/projects/portfolio.png";

export const projectsData = [
  {
    title: "BlogNest",
    description: "BlogNest is a full-stack blog application where users can write, edit, and share their thoughts. Built with the MERN stack, it supports image uploads, bookmarks, comments, and more!",
    image: blognest,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Clerk(Auth)"],
    liveUrl: "https://blognest-nu.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/BlogNest",
  },
  {
    title: "MyJournal",
    description: " A full-stack journal app built with React, Tailwind CSS, ExpressJs, and Firebase.. Users can create, edit and delete the journals and also can make them public or private.",
    image: myJournal,
    tags: ["React", "Firebase", "Tailwind CSS", "Express"],
    liveUrl: "https://my-journal-swart.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/my-journal",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects. Designed to be fast, responsive, and visually appealing, with a focus on user experience.",
    image: portfolio,
    tags: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "/",
    githubUrl: "https://github.com/Piyush-20045/Portfolio",
  },
];