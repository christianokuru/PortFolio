import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectRow from "../components/ProjectRow";

export const metadata = {
  title: "Work — Okuru Christian",
  description: "Websites and online stores built by Okuru Christian.",
};

export default function Projects() {
  return (
    <section className="wrap pt-10 md:pt-16 lg:pt-20">
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
        <a
          href="https://github.com/christianokuru"
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-soft pill-lg"
        >
          More on GitHub
        </a>
        <Link href="/contact" className="pill pill-dark pill-lg ml-2">
          Start a project
        </Link>
      </div>
    </section>
  );
}
