import Link from "next/link";
import { EDUCATION, EXPERIENCE, PERSON, SKILLS } from "@/data/site";
import Tag from "../components/Tag";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "About Okuru Christian: front-end developer in Lagos with 4+ years of experience and a B.Eng in Electrical & Electronics Engineering. Skills, experience and contact details.",
  path: "/about",
});

const INFO = [
  { label: "Name", value: PERSON.name },
  { label: "Role", value: PERSON.role },
  { label: "Experience", value: "4+ years" },
  { label: "Based in", value: PERSON.location },
  { label: "Nationality", value: "Nigerian" },
  { label: "Language", value: "English" },
  { label: "Freelance", value: "Available" },
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
  { label: "Phone", value: PERSON.phone, href: PERSON.phoneHref },
];

function Rows({ title, items }) {
  return (
    <div>
      <h2 className="t-small text-quiet">{title}</h2>
      <ul className="mt-3">
        {items.map((item) => (
          <li
            key={item.place}
            className="grid gap-1 border-t border-line py-4 lg:grid-cols-[1fr_auto] lg:gap-6"
          >
            <div>
              <p className="t-title">{item.role}</p>
              <p className="t-body">{item.place}</p>
            </div>
            <p className="t-small text-quiet lg:text-right">
              {item.dates}
              <br className="hidden lg:block" />
              <span className="lg:hidden"> · </span>
              {item.type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="wrap pt-10 md:pt-16 lg:pt-20">
        <p className="t-small text-quiet">About</p>
        <h1 className="t-hero mt-3 max-w-[15ch]">
          A front-end developer with an <span className="t-italic">engineer’s</span> eye.
        </h1>

        <div className="mt-6 grid gap-5 lg:mt-10 lg:grid-cols-12">
          <p className="t-body max-w-[48ch] lg:col-span-5">
            I studied Electrical and Electronics Engineering, but curiosity pulled me into web
            development. Now I blend that technical thinking with an eye for design to build
            clean, user-friendly interfaces.
          </p>
          <p className="t-body max-w-[48ch] lg:col-span-5 lg:col-start-7">
            I approach every project with care, creativity and a problem-solving mindset — so
            your idea turns into a fast, intuitive website that works on every screen.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <Link href="/contact" className="pill pill-dark pill-lg">
            Start a project
          </Link>
          <a href={PERSON.cvPath} download className="pill pill-soft pill-lg">
            Download CV
          </a>
        </div>
      </section>

      <section className="wrap section">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-12">
            <Rows title="Experience" items={EXPERIENCE} />
            <Rows title="Education" items={EDUCATION} />

            <div>
              <h2 className="t-small text-quiet">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {SKILLS.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="t-small text-quiet">Details</h2>
            <dl className="mt-3">
              {INFO.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[110px_1fr] gap-4 border-t border-line py-3 lg:grid-cols-[160px_1fr]"
                >
                  <dt className="t-body text-quiet">{row.label}</dt>
                  <dd className="t-body break-words">
                    {row.href ? (
                      <a href={row.href} className="underline-offset-4 hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
