import blognest from "../assets/projects/blognest.png";
import myJournal from "../assets/projects/myJournal.png";
import campX from "../assets/projects/CampX.png";
import logofy from "../assets/projects/logofy.png"
import linkits from "../assets/projects/linkits.png"
import geminiClone from "../assets/projects/geminiClone.png"
import codenest from "../assets/projects/code-nest.png"
import pretext from "../assets/projects/pretext.png"
import brightCampus from "../assets/projects/brightCampus.jpeg"


export const projectsData = [
  {
    title: "Linkits",
    description: "Linkits is a curated developer resources platform where users can discover useful tools, job platforms, interview prep resources, AI tools, and free courses, all in one place. It supports Google authentication and allows users to explore categorized links through a clean, minimal interface.",
    image: linkits,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Google OAuth",
    ],
    liveUrl: "https://linkits.piyushh.tech/",
    githubUrl: "https://github.com/Piyush-20045/linkits",
    status: "",
    category: "full-stack",
    features: [
      "Built a categorized directory of useful developer resources and tools",
      "Implemented Google OAuth authentication using NextAuth",
      "Created bookmark feature with personalized user dashboard",
      "Designed animated homepage hero section using tsParticles",
      "Responsive black and white modern UI with category filtering",
    ],
    whatILearned: [
      "Implemented OAuth authentication flow with Google Sign-In",
      "Learned how NextAuth MongoDB Adapter manages users and sessions",
      "Understood difference between Mongoose and MongoDB Adapter use-cases",
      "Built APIs with Next.js App Router and MongoDB integration",
      "Improved state management, conditional UI rendering, and protected routes",
    ],
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
    title: "BrightCampus",
    description:
      "A modern university landing page designed to showcase programmes, campus life, features, testimonials, admissions CTA, and contact information. Built with a clean academic UI, responsive layout, smooth scrolling, carousel interactions, and conversion-focused sections for prospective students.",
    image: brightCampus,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://bright-campus.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/bright-campus",
    category: "frontend",
    features: [
      "Responsive university landing page with hero, about, programmes, campus, features, testimonials, CTA, and footer sections",
      "Interactive campus carousel, embedded YouTube video cards, sticky side buttons, and smooth anchor scrolling",
      "Clean blue and teal themed UI with reusable components and mobile-friendly navigation"
    ],
    whatILearned: [
      "Creating a complete landing page structure for an education/university website",
      "Using reusable React components and constants to keep code simple and organized",
      "Improving responsive design, section spacing, theme consistency, and interactive UI elements"
    ],
  },
  {
    title: "CodeNest",
    description: "A modern web development agency website built for a client to showcase services, portfolio work, pricing, testimonials, and contact details. Focused on clean UI, smooth user experience, and conversion-driven landing page design.",
    image: codenest,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://codenestt.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/code-nest",
    category: "frontend",
    features: [
      "Modern landing page with hero, services, pricing, testimonials, and CTA sections",
      "Responsive multi-page layout with About, Work, and Contact pages",
      "Smooth animations and premium dark-themed UI design"
    ],
    whatILearned: [
      "Building service-based websites with strong landing page structure",
      "Creating responsive layouts and reusable UI sections",
      "Improving design sense with modern animations and clean spacing"
    ],
  },
  {
    title: "Pretext Playground",
    description: "A small interactive playground I built to try out Pretext - a text measurement library by Cheng Lou (creator of react-motion, ReasonML). Pretext bypasses expensive DOM reflows by calculating text layout using pure arithmetic, making real-time text wrapping possible at 60fps. I wanted to see what it feels like to build something with it, so I made this page where text reflows live around draggable objects.",
    image: pretext,
    tags: ["React", "Tailwind CSS", "Vanilla JS", "@chenglou/pretext"],
    liveUrl: "https://pretext-playgroundd.vercel.app/",
    githubUrl: "https://github.com/Piyush-20045/pretext-playground",
    category: "vibe-coded",
    features: ["Real-time text wrapping around draggable objects",
      "Orb collision physics with explosion effects on click",
      "Fully responsive with mobile-optimized layout",],
    whatILearned: ["How Pretext decouples text measurement from the DOM using cached segment data and pure math",
      "Building a requestAnimationFrame loop that ties physics, reflow, and rendering together"],
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