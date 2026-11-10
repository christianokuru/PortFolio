import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PERSON, SITE_DESCRIPTION, SITE_URL, SKILLS, SOCIALS } from "@/data/site";
import { HOME_TITLE, pageMeta } from "@/lib/seo";

// Free stand-ins for the reference type: a light editorial serif and a clean sans
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMeta({ path: "/" }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s — Okuru Christian",
  },
  applicationName: "Okuru Christian",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  keywords: [
    "Okuru Christian",
    "front-end developer",
    "web developer Lagos",
    "web developer Nigeria",
    "Next.js developer",
    "React developer",
    "Vue developer",
    "Nuxt developer",
    "Tailwind CSS",
    "freelance web developer",
    "e-commerce website",
    "landing page",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: [{ rel: "icon", url: "/1.png", sizes: "512x512" }],
  // Google Search Console ownership check
  verification: { google: "D0g86W68cmXrvwBgvp-ypLCXx1Lr9G35zUqalM-Lnuw" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Structured data so search engines understand who the site is about
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      jobTitle: PERSON.role,
      url: SITE_URL,
      email: `mailto:${PERSON.email}`,
      image: `${SITE_URL}/og.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      knowsAbout: ["Web development", "Front-end development", ...SKILLS],
      sameAs: SOCIALS.filter((s) => !s.href.startsWith("https://wa.me")).map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Okuru Christian",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
