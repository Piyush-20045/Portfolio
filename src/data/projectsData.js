import blognest from "../assets/projects/blognest.PNG";
import myJournal from "../assets/projects/myJournal.PNG";
import campX from "../assets/projects/CampX.png";
import logofy from "../assets/projects/logofy.png"
import linkits from "../assets/projects/linkits.png"

export const projectsData = [
  {
    title: "Linkits",
    description: "Linkits is a curated developer resources platform where users can discover useful tools, job platforms, interview prep resources, AI tools, and free courses — all in one place. It supports Google authentication and allows users to explore categorized links through a clean, minimal interface.",
    image: linkits,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Google OAuth",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Piyush-20045/linkits",
    status: "In Progress",
    category: "in-progress"
  },
  {
    title: "Logofy",
    description: "Logofy is an AI-powered logo generator where users can create custom logos using text prompts. It supports authentication, free credits, premium plans with payments, and saves generated logos for users.",
    image: logofy,
    tags: ["Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "AI APIs",
      "Razorpay"],
    liveUrl: "https://logofyy.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/logofy",
    category: "full-stack"
  },
  {
    title: "BlogNest",
    description: "BlogNest is a full-stack blog application where users can write, edit, and share their thoughts. Built with the MERN stack, it supports image uploads, bookmarks, comments, and more!",
    image: blognest,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Clerk(Auth)"],
    liveUrl: "https://blognest-nu.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/BlogNest",
    category: "full-stack"
  },
  {
    title: "CampX",
    description: "CampX is a full-stack MERN application where users can explore, add, and review campgrounds. Built with modern web technologies featuring auth, CRUD operations, state management with redux toolkit.",
    image: campX,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Redux Toolkit"],
    liveUrl: "https://campx-py.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/CampX",
    category: "full-stack"
  },
  {
    title: "MyJournal",
    description: "A full-stack journal app built with React, Tailwind CSS, ExpressJs, and Firebase.. Users can create, edit and delete the journals and also can make them public or private.",
    image: myJournal,
    tags: ["React", "Firebase", "Tailwind CSS", "Express", "Node.js"],
    liveUrl: "https://my-journal-swart.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/my-journal",
    category: "full-stack"
  },
  {
    title: "GeminiClone – Minimal AI Chat Interface",
    description: "GeminiClone is a React project that provides a simple AI chat experience with a clean, distraction-free interface. The focus of this project is UI clarity, state management, and user experience.",
    image: myJournal,
    tags: ["React", "Tailwind CSS", "Axios", "Context-API", "Pollinations.ai"],
    liveUrl: "https://geminiiclone.netlify.app/",
    githubUrl: "https://github.com/Piyush-20045/GeminiClone",
    category: "frontend"
  },
];