"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PERSON, SOCIALS } from "@/data/site";
import Availability from "./Availability";
import ThemeToggle from "./ThemeToggle";
import { getLenis } from "@/lib/lenis";

function MenuIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
      <path d="M0 1h14M0 5h14M0 9h14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu when the page changes
  useEffect(() => setOpen(false), [pathname]);

  // Stop the page scrolling behind the open menu (native and smooth scroll)
  useEffect(() => {
    const lenis = getLenis();
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      getLenis()?.start();
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-canvas">
        <div className="wrap grid h-[60px] grid-cols-[1fr_auto] items-center lg:h-[76px] lg:grid-cols-[1fr_auto_1fr]">
          {/* Phone: menu pill + theme toggle on the left */}
          <div className="flex items-center gap-1.5 justify-self-start lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="pill pill-line"
              aria-expanded={open}
              aria-controls="site-menu"
            >
              Menu <MenuIcon />
            </button>
            <ThemeToggle />
          </div>

          {/* Desktop: nav pills on the left */}
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`pill ${pathname === item.href ? "pill-soft" : "pill-line"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Wordmark: right on phones, centred two-line lockup on desktop */}
          <Link
            href="/"
            aria-label="Home"
            className="justify-self-end text-right font-serif text-[22px] font-light leading-none tracking-[-0.03em] lg:justify-self-center lg:text-center lg:text-[28px] lg:leading-[0.85]"
          >
            <span className="lg:block">Okuru</span>{" "}
            <span className="lg:block">Christian</span>
          </Link>

          {/* Desktop: availability + conversion on the right */}
          <div className="hidden items-center justify-end gap-4 lg:flex">
            <Availability />
            <ThemeToggle />
            <Link href="/contact" className="pill pill-dark">
              Start a project
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer for the fixed header */}
      <div className="h-[60px] lg:h-[76px]" aria-hidden="true" />

      {/* Phone menu */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-canvas transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="wrap flex h-[60px] items-center justify-between">
          <button type="button" onClick={() => setOpen(false)} className="pill pill-line">
            Close <CloseIcon />
          </button>
          <Link
            href="/"
            className="font-serif text-[22px] font-light leading-none tracking-[-0.03em]"
          >
            {PERSON.name}
          </Link>
        </div>

        <nav className="wrap mt-10 flex flex-col gap-1" aria-label="Mobile">
          {[{ name: "Home", href: "/" }, ...NAV].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-3 py-1 font-serif text-[44px] font-light leading-none tracking-[-0.035em]"
            >
              <span className="font-sans text-[11px] tracking-normal text-quiet">
                [0{i + 1}]
              </span>
              <span className={pathname === item.href ? "italic" : ""}>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="wrap mt-auto pb-8">
          <Availability />
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/contact" className="pill pill-dark pill-lg">
              Start a project
            </Link>
            <a href={PERSON.cvPath} download className="pill pill-soft pill-lg">
              Download CV
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 t-small text-quiet">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
