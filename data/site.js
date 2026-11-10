// Single source for personal details used across the site.
// Everything here comes from the previous version of the portfolio.

// Public address of the site. Set NEXT_PUBLIC_SITE_URL if you move to a custom domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://okuru-christian.vercel.app"
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Okuru Christian is a front-end web developer in Lagos, Nigeria, building fast, mobile-first websites and online stores with React, Next.js, Vue and Nuxt.";

export const PERSON = {
  name: "Okuru Christian",
  role: "Front-End Web Developer",
  email: "okuruchristian@gmail.com",
  phone: "+234 905 995 2426",
  phoneHref: "tel:+2349059952426",
  location: "Lagos, Nigeria",
  address: "#21 Pipeline Road, Baruwa, Gate Bus Stop. Ipaja, Lagos.",
  cvPath: "/FRONTEND - OKURU CHRISTIAN.pdf",
};

export const NAV = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/christianokuru" },
  { name: "LinkedIn", href: "https://linkedin.com/in/okuru-christian" },
  { name: "X", href: "https://x.com/Dev_Chrisss" },
  { name: "Telegram", href: "https://t.me/Bitter_noodles" },
  { name: "WhatsApp", href: "https://wa.me/2349059952426" },
];

// Small dot colour for each technology tag (the only colour in the UI besides green)
export const TECH_DOTS = {
  "Next.js": "#000000",
  React: "#22b5d8",
  "Vue.js": "#3fb27f",
  "Nuxt.js": "#00c58e",
  Tailwind: "#38bdf8",
  "Tailwind CSS": "#38bdf8",
  GSAP: "#88ce02",
  Figma: "#f24e1e",
  Shadcn: "#7c3aed",
  ShadCn: "#7c3aed",
  "Shadcn-Vue": "#7c3aed",
  "Sanity.io": "#f03e2f",
  CSS: "#2965f1",
  HTML5: "#e34f26",
  CSS3: "#2965f1",
  JavaScript: "#e6c400",
  Git: "#f05032",
};

export const CORE_STACK = ["Next.js", "React", "Vue.js", "Nuxt.js", "Tailwind CSS", "GSAP"];

export const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Tailwind CSS",
  "Git",
];

export const EXPERIENCE = [
  {
    role: "Front-End Developer",
    place: "BernodeHub, Calabar",
    dates: "Nov 2024 – Present",
    type: "Full time",
  },
  {
    role: "Front-End Developer (Volunteer)",
    place: "New Horizons, Abuja",
    dates: "Feb 2024 – Apr 2024",
    type: "Volunteer",
  },
];

export const EDUCATION = [
  {
    role: "B.Eng, Electrical & Electronics Engineering",
    place: "Afe Babalola University, Ado-Ekiti",
    dates: "Sept 2017 – Oct 2022",
    type: "Degree",
  },
];

export const FAQ = [
  {
    q: "What do you build with?",
    a: "Mostly Next.js and React, or Vue and Nuxt, styled with Tailwind CSS. For motion I use GSAP. I pick the stack that suits your project, not the other way round.",
  },
  {
    q: "Can you build from my Figma design?",
    a: "Yes. I turn Figma files into responsive pages that match the design closely, starting with the phone layout and scaling up to desktop.",
  },
  {
    q: "What kinds of websites have you built?",
    a: "Online stores, a SaaS landing page, brand and product sites, a restaurant site and a 3D product viewer. You can see them all on the Work page.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on the number of pages and features. A single landing page is much quicker than a full online store. After a short chat I’ll give you a clear timeline.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. I’m based in Lagos and work remotely, so we can plan the project over email, WhatsApp or a video call.",
  },
];
