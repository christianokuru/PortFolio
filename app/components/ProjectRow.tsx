import Image from "next/image";
import Tag from "./Tag";

type Project = {
  id: number;
  image: string;
  width?: number;
  height?: number;
  title: string;
  description: string;
  links: { live: string; github: string };
  stack: string[];
  category: string;
};

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M2 8L8 2M3 2h5v5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// One case study: title + tags, short description, then a raw, square-edged crop.
export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  // Alternate the crop width and side so the gallery feels hand-placed, not gridded
  const layouts = [
    "md:w-[78%] lg:w-[52%]",
    "md:ml-auto md:w-[70%] lg:w-[44%]",
    "md:ml-[10%] md:w-[74%] lg:ml-[30%] lg:w-[48%]",
  ];
  const crop = layouts[index % layouts.length];

  return (
    <article id={`project-${project.id}`} className="scroll-mt-24 py-10 md:py-14 lg:py-16">
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="t-small text-quiet">[{String(index + 1).padStart(2, "0")}] · {project.category}</p>
          <h3 className="t-title mt-2">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <p className="t-body max-w-[46ch]">{project.description}</p>
          <div className="flex shrink-0 gap-2">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-dark pill-lg"
            >
              <ArrowIcon /> Visit site
            </a>
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-soft pill-lg"
              >
                Code
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <a
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        className={`group mt-6 block overflow-hidden bg-paper md:mt-8 lg:mt-10 ${crop}`}
        aria-label={`Open ${project.title}`}
      >
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          width={project.width ?? 1350}
          height={project.height ?? 630}
          sizes="(min-width: 1024px) 52vw, (min-width: 768px) 78vw, 100vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
        />
      </a>
    </article>
  );
}
