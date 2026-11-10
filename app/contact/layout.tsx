import { pageMeta } from "@/lib/seo";

// The contact page is a client component, so its metadata lives here
export const metadata = pageMeta({
  title: "Contact",
  description:
    "Start a project with Okuru Christian, front-end web developer in Lagos. Send a message, email or call to talk about your website.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
