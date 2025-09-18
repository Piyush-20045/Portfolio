import blognest from "../assets/projects/blognest.PNG";
import myJournal from "../assets/projects/myJournal.PNG";
import campX from "../assets/projects/CampX.png";

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
    title: "CampX",
    description: "CampX is a full-stack MERN application where users can explore, add, and review campgrounds. It’s built with modern web technologies and demonstrates authentication, CRUD operations, state management with redux toolkit.",
    image: campX,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Redux Toolkit"],
    liveUrl: "https://campx-py.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/CampX",
  },
  {
    title: "MyJournal",
    description: " A full-stack journal app built with React, Tailwind CSS, ExpressJs, and Firebase.. Users can create, edit and delete the journals and also can make them public or private.",
    image: myJournal,
    tags: ["React", "Firebase", "Tailwind CSS", "Express"],
    liveUrl: "https://my-journal-swart.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/my-journal",
  },
];