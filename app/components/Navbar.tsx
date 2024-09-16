"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Darkmode} from "./Darkmode";

export default function Navbar() {
  const pathname = usePathname();

  // Creating an array of objects that contain the links in the navbar
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="container max-w-screen-2xl mx-auto text-2xl flex items-center justify-between py-3 border-b border-l-border">
      <Link href="/" className="text-3xl font-semibold text-primary font-[family-name:var(--font-geist-mono)]">
        Okuru<span className="text-purple-800 text-xl">.</span>
      </Link>
      <div className="flex gap-x-10 text-base text-gray-600 items-center font-[family-name:var(--font-geist-mono)]">
        {navLinks.map((link, index) => (
          <div key={index}>
            {pathname === link.href ? (
              <Link
                className="font-semibold text-primary border-b-[3px] border-primary rounded-md px-3"
                href={link.href}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                className="font-semibold text-gray-500 transition duration-100 hover:text-primary"
                href={link.href}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <Button className="">
          <Link href="/contact">Hire me</Link>
        </Button>
        <Darkmode />
      </div>
    </nav>
  );
}

{
  /* <Link href="/services">Services</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link> */
}
