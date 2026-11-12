import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectRow from "../components/ProjectRow";
import { SITE_URL } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Websites, online stores and landing pages built by Okuru Christian with Next.js, React, Vue, Nuxt and Tailwind CSS.",
  path: "/projects",
});

// Lists each project as a creative work by Okuru Christian
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Okuru Christian",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: p.links.live,
      image: `${SITE_URL}${p.image}`,
      genre: p.category,
      keywords: p.stack.join(", "),
      creator: { "@id": `${SITE_URL}/#person` },
    },
  })),
};

export default function Projects() {
  return (
    <section className="wrap pt-10 md:pt-16 lg:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="t-small text-quiet">Work · {projects.length} projects</p>
      <h1 className="t-hero mt-3 max-w-[14ch]">
        Every site, from first idea to <span className="t-italic">launch.</span>
      </h1>
      <p className="t-body mt-5 max-w-[44ch]">
        Online stores, brand sites and landing pages — built mobile first with React,
        Next.js, Vue and Nuxt.
      </p>

      <div className="mt-6 lg:mt-10">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <Link href="/contact" className="pill pill-dark pill-lg">
          Start a project
        </Link>
      </div>
    </section>
  );
}
