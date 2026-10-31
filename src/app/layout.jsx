import "../index.css";
import Script from "next/script";
import { Geist_Mono, Nunito, Pixelify_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-nunito",
});
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const siteUrl = "https://piyushh.tech";
const description =
  "Portfolio of Piyush Yadav - Full Stack Developer building scalable, efficient web applications using MERN, Next.js, and TypeScript.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Piyush Yadav | Full Stack Developer",
  description,
  keywords: [
    "Piyush Yadav",
    "Full Stack Developer",
    "MERN",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Piyush Yadav" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Piyush Yadav | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web applications. Explore my projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piyush Yadav - Full Stack Developer Portfolio",
      },
    ],
    siteName: "Piyush Yadav",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Yadav | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web applications. Explore my projects, skills, and experience.",
    images: ["/og-image.png"],
    creator: "@Piyush9436",
  },
};

export default function RootLayout({ children }) {
  const analyticsSrc =
    process.env.NEXT_PUBLIC_UMAMI_SRC || process.env.VITE_UMAMI_SRC;
  const analyticsId =
    process.env.NEXT_PUBLIC_UMAMI_ID || process.env.VITE_UMAMI_ID;
  return (
    <html
      lang="en"
      className={`scroll-smooth ${nunito.variable} ${pixelify.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="restore-theme" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("darkMode")==="true")document.documentElement.classList.add("dark")}catch{}`}
        </Script>
        {children}
        {analyticsSrc && analyticsId && (
          <Script
            src={analyticsSrc}
            data-website-id={analyticsId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
