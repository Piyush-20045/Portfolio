# Portfolio

This is my personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.
It showcases my projects, skills, and contact information with a real-time visitor counter.

### **Visit :** [Portfolio](https://piyushyadav.vercel.app/)  

---

## Preview  

![Portfolio Preview](https://res.cloudinary.com/dhhhr2skx/image/upload/v1768191678/portfolio_ggveye.png)

---

## Features  

- 🖼️ Hero Section – Clean introduction with animation
- 💼 Projects Showcase – Highlighting my best work
- 🎨 Modern UI/UX – Styled with Tailwind CSS, Framer Motion animations and lightswind ui
- 📱 Responsive Design – Optimized for desktop and mobile
- ✉️ Contact Form – Integrated with EmailJS for direct messages
- 👀 Visitor Counter – Real-time visit tracking with Neon Postgres
---

## Tech Stack  

- React.js (Frontend)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Icons (Icons)
- EmailJS (Contact form integration)
- React-Toastify (Notifications)
- Neon Postgres (Visitor counter database)
- Vercel Serverless Functions (API)
---

## Setup Instructions  

### Prerequisites  
- Node.js & npm installed
- EmailJS account for contact form
- Vercel account (for deployment)
- Neon account (for visitor counter database)

#### 1. Clone the repo
```bash
git clone https://github.com/Piyush-20045/Portfolio.git
cd portfolio
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Set up EmailJS
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your public key from the dashboard

#### 4. Set up Neon Database (for Visitor Counter)
1. Create an account at [Neon](https://neon.tech/)
2. Create a new project and database
3. Copy the connection string (DATABASE_URL)
4. In Neon SQL Editor, run this query to create the visits table:
```sql
CREATE TABLE visits (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count INTEGER DEFAULT 0
);

INSERT INTO visits (id, count) VALUES (1, 0);
```

#### 5. Set up Umami Analytics (Optional)
1. Sign up at [Umami Cloud](https://cloud.umami.is/)
2. Add your website and get the script URL and website ID

#### 6. Create a .env file in the root directory
```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Umami Analytics (Optional)
VITE_UMAMI_SRC=your-umami-script-url
VITE_UMAMI_ID=your_umami_website_id

# Neon Database (for Visitor Counter)
DATABASE_URL=your_neon_database_connection_string
```

#### 7. Run the app locally
```bash
npm run dev
```

**Note:** The visitor counter API (`/api/visits`) only works when deployed to Vercel. For local development, you can use `vercel dev` instead of `npm run dev`.

#### 8. Deploy to Vercel
1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/)
3. Add environment variables in Vercel project settings:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_UMAMI_SRC` (optional)
   - `VITE_UMAMI_ID` (optional)
   - `DATABASE_URL` (from Neon)
4. Deploy!

**Alternative:** Connect Neon directly through Vercel
1. In Vercel Dashboard → Your Project → Storage → Marketplace
2. Search for "Neon" and click "Add Integration"
3. Follow the setup wizard (automatically adds `DATABASE_URL`)

---

## Folder Structure
```
portfolio/
├── api/
│   └── visits.js          # Serverless function for visitor counter
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Visitors.jsx   # Visitor counter component
│   ├── data/
│   └── ui/
│       ├── hooks/
│       ├── lib/
│       ├── lightswind.css
│       └── lightswind/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env                   # Environment variables (don't commit!)
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

---

## Author
**Piyush Yadav**
- Twitter/X: [@piyush9436](https://x.com/Piyush9436)
- LinkedIn: [@piyushyadav](https://www.linkedin.com/in/piyush-yadav-a4b164260/)

---

## License
This project is open source and available under the [MIT License](LICENSE).
