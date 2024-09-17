"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Darkmode } from "./Darkmode";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
    <nav className="px-4 lg:container lg:max-w-screen-2xl lg:mx-auto lg:text-2xl flex items-center lg:justify-between py-3 border-b border-l-border">
      <Link href="/" className="text-3xl font-semibold text-primary">
        Okuru<span className="text-purple-800 text-xl">.</span>
      </Link>
      <div className="hidden lg:flex lg:gap-x-10 lg:text-base lg:text-gray-600 lg:items-center">
        {navLinks.map((link, index) => (
          <div key={index}>
            {pathname === link.href ? (
              <Link
                className="lg:font-semibold lg:text-primary lg:border-b-[3px] lg:border-primary lg:rounded-md px-3"
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
        <Button className="hidden lg:block">
          <Link href="/contact">Hire me</Link>
        </Button>
        <div className="">
          <Darkmode />
        </div>
      </div>
      <div className="lg:hidden flex items-center w-full justify-end gap-x-6">
        <Darkmode />
        <HamburgerMenuIcon className="w-10 h-9 text-gray-500 hover:text-primary lg:hidden"/>
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
