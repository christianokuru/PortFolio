import Link from "next/link";
import Image from "next/image";
import { PERSON, SOCIALS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="wrap pb-8 pt-20 lg:pb-6 lg:pt-32">
      {/* Big closing wordmark with a small inset crop */}
      <div className="text-center">
        <p className="font-serif text-[54px] font-light leading-[0.9] tracking-[-0.045em] md:text-[96px] lg:text-[150px]">
          Okuru
          <span className="relative mx-2 inline-block h-[0.62em] w-[0.9em] translate-y-[0.04em] overflow-hidden align-baseline lg:mx-4">
            <Image
              src="/projects/kylva.png"
              alt=""
              fill
              sizes="140px"
              className="object-cover object-left-top"
            />
          </span>
          <br className="md:hidden" />
          Christian
        </p>

        <p className="t-body mx-auto mt-6 max-w-[34ch] lg:mt-8">
          Tell me what you’re building and what you need. I’ll tell you how I can help.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <Link href="/contact" className="pill pill-dark pill-lg">
            Start a project
          </Link>
          <a href={`mailto:${PERSON.email}`} className="pill pill-soft pill-lg">
            Email me
          </a>
        </div>
        <p className="mt-3 t-small text-quiet">{PERSON.email}</p>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-center gap-5 lg:mt-24 lg:flex-row lg:justify-between">
        <div className="flex flex-wrap justify-center gap-1.5">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-line"
            >
              {s.name}
            </a>
          ))}
        </div>
        <p className="t-small text-center">
          Based in Lagos, working with clients worldwide.
        </p>
        <a href={PERSON.cvPath} download className="pill pill-line">
          Download CV <span aria-hidden="true">+</span>
        </a>
      </div>
    </footer>
  );
}
