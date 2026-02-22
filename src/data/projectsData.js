import blognest from "../assets/projects/blognest.PNG";
import myJournal from "../assets/projects/myJournal.PNG";
import campX from "../assets/projects/CampX.png";
import logofy from "../assets/projects/logofy.png"
import linkits from "../assets/projects/linkits.png"
import geminiClone from "../assets/projects/geminiClone.png"

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
    category: "full-stack",
    features: [
      "AI Logo Generation – Premium logos via Replicate's Hyper-Flux-8step model (8-10s generation)",
      "Free Tier – Generate logos with Pollinations.ai for non-premium users",
      "Authentication – Secure login/signup via Clerk",
      "Payment Integration – Razorpay for premium plan subscriptions",
      "Credit System – Track and manage user credits",
      "Logo Dashboard – View and manage all generated logos",
      "Cloud Storage – Integrated with Supabase for permanent logo storage",
      "Responsive UI – Built with Tailwind CSS and shadcn/ui components",
      "Toast Notifications – Real-time feedback with React Hot Toast",
    ],
    whatILearned: [
      "Integrated multiple AI models (Gemini for prompts, Replicate(for Premium Users)/Pollinations(for Free Users) for generating logos)",
      "Learned Zustand for efficient client-side state management with persistence",
      "Managed payment flows with Razorpay integration",
      "Implemented credit-based payment system with Razorpay integration",
      "Handled race conditions in authentication and database syncing",
      "Built routing logic for Free vs Premium users in backend (free vs premium)",
      "Handling AI response of binary data Handled binary data conversions (base64, ArrayBuffer, Blob) for image processing",
      "Learned about Supabase and its storage bucket feature to save images"
    ]
  },
  {
    title: "BlogNest",
    description: "BlogNest is a full-stack blog application where users can write, edit, and share their thoughts. Built with the MERN stack, it supports image uploads, bookmarks, comments, and more!",
    image: blognest,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Clerk(Auth)"],
    liveUrl: "https://blognest-nu.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/BlogNest",
    category: "full-stack",
    features: [
      "CRUD Operations – Create, edit, and delete blogs",
      "Authentication & Authorization – Secure login/signup via Clerk",
      "Comments – Add and view comments on blogs",
      "Bookmarks – Save your favorite blogs for later",
      "Image Uploads – Integrated with ImageKit for media storage",
      "Responsive UI – Styled with Tailwind CSS & animations",
      "Toast Notifications – Integrated with React Toastify",
    ],
    whatILearned: [
      "Gained hands-on experience with CRUD operations using REST API",
      "Integrated Clerk authentication for secure and seamless login/signup",
      "Implemented ImageKit for efficient image storage and delivery",
      "Managed global state effectively with Context API",
    ]
  },
  {
    title: "CampX",
    description: "CampX is a full-stack MERN application where users can explore, add, and review campgrounds. Built with modern web technologies featuring auth, CRUD operations, state management with redux toolkit.",
    image: campX,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Redux Toolkit"],
    liveUrl: "https://campx-py.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/CampX",
    category: "full-stack",
    features: [
      "CRUD Operations – Create, edit, and delete campgrounds",
      "Responsive UI – Styled with Tailwind CSS for a modern look",
      "Image Storage – Integrated with Cloudinary for media uploads",
      "State Management – State management with Redux Toolkit",
      "Protected Routes – Role-based access with JWT + Redux Toolkit",
    ],
    whatILearned: [
      "Implemented JWT authentication & protected routes",
      "Managed global state with Redux Toolkit",
      "CRUD Operations – Create, edit, and delete campgrounds",
      "Integrated Cloudinary for image uploads"
    ]
  },
  {
    title: "MyJournal",
    description: "A full-stack journal app built with React, Tailwind CSS, ExpressJs, and Firebase.. Users can create, edit and delete the journals and also can make them public or private.",
    image: myJournal,
    tags: ["React", "Firebase", "Tailwind CSS", "Express", "Node.js"],
    liveUrl: "https://my-journal-swart.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/my-journal",
    category: "full-stack",
    features: [
      "CRUD Operations – Create, edit, and delete journals",
      "Authentication – Secure login/signup with Firebase Auth",
      "Image Uploads – Integrated with ImageKit for media storage",
      "Public/Private Visibility – Control who can view your journals",
      "Responsive UI – Built with Tailwind CSS for a modern look",
      "Rich Text Editing – Write beautiful journals with React-Quill"
    ],
    whatILearned: [
      "Built a full-stack journal app with Firebase authentication",
      "Used Firestore for storing and managing user journals",
      "Integrated ImageKit for efficient media uploads",
      "Implemented a rich text editor using React-Quill",
      "Added EmailJS integration for Contact page",
    ]
  },
  {
    title: "GeminiClone – Minimal AI Chat Interface",
    description: "GeminiClone is a React project that provides a simple AI chat experience with a clean, distraction-free interface. The focus of this project is UI clarity, state management, and user experience.",
    image: geminiClone,
    tags: ["React", "Tailwind CSS", "Axios", "Context-API", "Pollinations.ai"],
    liveUrl: "https://geminiiclone.netlify.app/",
    githubUrl: "https://github.com/Piyush-20045/GeminiClone",
    category: "frontend",
    features: ["Chat Interface – Ask questions and get AI‑generated answers",
      "Light / Dark Mode – Simple theme toggle with local storage persistence",
      "Chat History – Previous conversations are listed in a sidebar and restored on refresh",
      "New Chat – Start a fresh conversation with a single click",],
    whatILearned: ["Making API requests using Axios and handling responses safely",
      "Using a public AI API to keep frontend architecture simple Persisting chat data with localStorage",
      "Managing light/dark themes using Context API",],
  },
];