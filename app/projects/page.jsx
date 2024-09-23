import Image from "next/image";
import project1 from "@/public/projects/ui-ux-design.png";
import project2 from "@/public/projects/portfolio.png";
import { ArrowRightCircle, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy, however it has no functionality or pages.",
    links: {
      live: "https://nextjs2-okuruchristian-gmailcoms-projects.vercel.app/",
      github: "https://google.com",
    },
    stack: ['Next.js', 'Tailwind', 'Figma'],
  },
  {
    id: 2,
    image: project2,
    title: "My Portfolio Site",
    description: "This is my personal portfolio site",
    links: {
      live: "port-folio-two-nu.vercel.app",
      github: "https://github.com/christianokuru/PortFolio",
    },
    stack: ['Next.js', 'Tailwind', 'Shadcn']
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col px-4 m-3">
      <section>
        <div className="w-full flex justify-center mb-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 lg:pb-6 lg:text-3xl lg:border-none">
            My Projects
          </h2>
        </div>

        {/* Looping over the Project array of objects */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex lg:flex-row flex-col lg:border lg:border-border lg:rounded-md mb-4"
          >
            {/* Image Section */}
            <div className="border-r lg:w-1/2 p-4">
              <Link
                href={project.links.live}
                target="_blank"
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-sm"
                />
              </Link>
            </div>

            {/* Project Details Section */}
            <article className="lg:w-1/2 p-4">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight pb-1 lg:text-6xl ">
                {project.id < 10 ? `0${project.id}` : project.id}
              </h1>
              <h2 className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
                {project.title}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-3">
                {project.description}
              </p>

              {/* Stack Section (you can customize this as needed) */}
              <div className="flex border-b-2 items-center gap-x-3 w-full mb-3 pb-2">
                {project.stack.map((tech, index) => (
                  <p key={index} className="relative border border-x-ring rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{tech}</p>    
                ))}
              </div>

              {/* Links Section */}
              <div className="flex gap-3 lg:mt-5">
                <Link
                  href={project.links.live}
                  target="_blank"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowRightCircle
                    className="text-green-600 hover:text-green-800 transition"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link
                  href={project.links.github}
                  target="_blank"
                  aria-label={`View ${project.title} GitHub Repository`}
                >
                  <Github
                    className="text-purple-600 hover:text-purple-800 transition"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
}
