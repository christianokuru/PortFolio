import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { CORE_STACK, EDUCATION, EXPERIENCE, FAQ, PERSON } from "@/data/site";
import Tag from "./components/Tag";
import ProjectRow from "./components/ProjectRow";
import Faq from "./components/Faq";

// Collage tiles: unequal widths and heights, bottom-aligned like prints on a table
const COLLAGE = [
  { id: 1, w: "w-[260px] lg:w-[420px]", h: "h-[150px] lg:h-[250px]" },
  { id: 4, w: "w-[200px] lg:w-[330px]", h: "h-[190px] lg:h-[320px]" },
  { id: 2, w: "w-[280px] lg:w-[470px]", h: "h-[140px] lg:h-[230px]" },
  { id: 6, w: "w-[210px] lg:w-[340px]", h: "h-[175px] lg:h-[290px]" },
  { id: 3, w: "w-[250px] lg:w-[400px]", h: "h-[155px] lg:h-[260px]" },
  { id: 8, w: "w-[200px] lg:w-[320px]", h: "h-[185px] lg:h-[300px]" },
  { id: 5, w: "w-[260px] lg:w-[430px]", h: "h-[150px] lg:h-[240px]" },
];

const PROOF = ["Kylva", "Mojoda FC", "BernodeHub", "Oats Collection", "Massive Barbecue"];

const PROMISES = [
  { label: "Mobile first", rot: "-rotate-[6deg]" },
  { label: "Fast loading", rot: "rotate-[3deg]" },
  { label: "SEO ready", rot: "-rotate-[2deg]" },
  { label: "Easy to update", rot: "rotate-[7deg]" },
  { label: "Clean code", rot: "-rotate-[4deg]" },
];

const REASONS = [
  {
    title: "Mobile first.",
    text: "Every layout starts on the phone, then grows to tablet and desktop.",
  },
  {
    title: "Design to code, faithfully.",
    text: "I turn Figma files into responsive pages that match the design closely.",
  },
  {
    title: "Modern stack.",
    text: "React, Next.js, Vue and Nuxt with Tailwind CSS — fast to build, easy to grow.",
  },
];

const byId = (id) => projects.find((p) => p.id === id);

export default function Home() {
  const featured = [1, 4, 2, 6, 3, 5].map(byId).filter(Boolean);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="wrap pt-10 md:pt-16 lg:pt-20">
        <h1 className="t-hero max-w-[15ch]">
          Websites that look sharp, load fast and turn{" "}
          <span className="t-sans-splice">visitors</span> into{" "}
          <span className="t-italic">clients.</span>
        </h1>

        <p className="t-body mt-5 max-w-[44ch] lg:mt-6">
          I’m {PERSON.name}, a front-end developer. I build websites and online stores
          with React, Next.js, Vue and Nuxt — mobile first, quick on every screen.
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5 lg:mt-6">
          {CORE_STACK.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2 lg:mt-9">
          <Link href="/contact" className="pill pill-dark pill-lg">
            Start a project
          </Link>
          <a href={PERSON.cvPath} download className="pill pill-soft pill-lg">
            Download CV
          </a>
        </div>
      </section>

      {/* ---------- Collage ---------- */}
      <section className="relative mt-12 lg:mt-16" aria-label="Recent work">
        <div className="no-scrollbar flex snap-x snap-mandatory items-end gap-3 overflow-x-auto px-4 md:px-6 lg:gap-4 lg:px-8">
          {COLLAGE.map((tile) => {
            const p = byId(tile.id);
            if (!p) return null;
            return (
              <Link
                key={tile.id}
                href={`/projects#project-${p.id}`}
                className={`relative shrink-0 snap-start overflow-hidden bg-paper ${tile.w} ${tile.h}`}
                aria-label={p.title}
              >
                <Image
                  src={p.image}
                  alt={`${p.title} website`}
                  fill
                  sizes="(min-width: 1024px) 470px, 280px"
                  className="object-cover object-left-top"
                />
              </Link>
            );
          })}
        </div>
        <span className="pill pill-dark pointer-events-none absolute bottom-3 left-4 md:hidden">
          Swipe <span aria-hidden="true">→</span>
        </span>
      </section>

      {/* ---------- Proof row ---------- */}
      <section className="wrap section text-center">
        <p className="t-small mx-auto max-w-[36ch] md:max-w-none">
          10+ websites shipped for stores, startups, clubs and creative brands.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:mt-8 lg:gap-x-16">
          {PROOF.map((name, i) => (
            <li
              key={name}
              className={`text-quiet ${
                i % 2
                  ? "font-sans text-[15px] font-medium tracking-[-0.02em] lg:text-[22px]"
                  : "font-serif text-[19px] italic lg:text-[28px]"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="t-display max-w-[14ch]">
            Selected work, built to be <span className="t-italic">used.</span>
          </h2>
          <Link href="/projects" className="pill pill-dark pill-lg self-start lg:self-auto">
            See all {projects.length} projects
          </Link>
        </div>

        <div className="mt-4 lg:mt-8">
          {featured.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="wrap section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ul className="mb-8 flex flex-wrap gap-2 lg:mb-10" aria-label="What you get">
              {PROMISES.map((p) => (
                <li key={p.label} className={`pill pill-soft ${p.rot}`}>
                  {p.label}
                </li>
              ))}
            </ul>

            <h2 className="t-display max-w-[13ch]">
              Designed with care. Built to <span className="t-italic">last.</span>
            </h2>
            <p className="t-body mt-5 max-w-[42ch]">
              For businesses that want a website people enjoy using. Clear layouts, smooth
              details and code that’s easy to grow later.
            </p>
            <Link href="/about" className="pill pill-dark pill-lg mt-6">
              More about me
            </Link>

            <h3 className="t-body mt-10 font-medium">Why clients work with me</h3>
            <ul className="mt-3 space-y-3">
              {REASONS.map((r) => (
                <li key={r.title} className="t-body max-w-[46ch]">
                  <span aria-hidden="true">→ </span>
                  <strong className="font-medium">{r.title}</strong> {r.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Quiet utility surface holding a small stack of crops */}
          <div className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-paper md:min-h-[440px] lg:min-h-0">
            {[
              { id: 7, cls: "left-[6%] top-[8%] w-[62%] -rotate-[4deg]" },
              { id: 11, cls: "right-[5%] top-[30%] w-[58%] rotate-[3deg]" },
              { id: 9, cls: "left-[14%] bottom-[7%] w-[60%] -rotate-[1deg]" },
            ].map(({ id, cls }) => {
              const p = byId(id);
              if (!p) return null;
              return (
                <div key={id} className={`absolute bg-canvas p-1.5 lg:p-2 ${cls}`}>
                  <Image
                    src={p.image}
                    alt={`${p.title} website`}
                    width={1350}
                    height={630}
                    sizes="(min-width: 1024px) 400px, 60vw"
                    className="h-auto w-full"
                  />
                  <p className="mt-1.5 text-[10px] text-quiet lg:text-xs">{p.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Experience (unboxed columns) ---------- */}
      <section className="wrap section pt-0 md:pt-0 lg:pt-0">
        <h2 className="t-small text-quiet">Experience &amp; education</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3 lg:mt-8">
          {[...EXPERIENCE, ...EDUCATION].map((item) => (
            <div key={item.place}>
              <p className="t-title">{item.role}</p>
              <p className="t-body mt-1">{item.place}</p>
              <p className="t-small mt-2 text-quiet">
                {item.dates} · {item.type}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="wrap section pt-0 md:pt-0 lg:pt-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="t-display max-w-[11ch]">
              Questions before we <span className="t-italic">start?</span>
            </h2>
            <p className="t-body mt-4 max-w-[38ch]">
              The things people usually ask before we work together.
            </p>
            <Link href="/contact" className="pill pill-dark pill-lg mt-5">
              Start a project
            </Link>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
