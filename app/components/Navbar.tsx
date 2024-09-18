"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Darkmode } from "./Darkmode";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { X } from "lucide-react";

// Creating an array of objects that contain the links in the navbar
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
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
          <Link href="/contact">
            <Button className="hidden lg:block">Hire me</Button>
          </Link>
          <div>
            <Darkmode />
          </div>
        </div>
        <div className="lg:hidden flex items-center w-full justify-end gap-x-6">
          <Darkmode />
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-8 w-10 text-gray-600 border rounded-xl hover:text-primary hover:border-primary" />
            ) : (
              <HamburgerMenuIcon className="w-10 h-9 text-gray-500 hover:text-primary lg:hidden" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? "text-white bg-primary"
                  : "text-gray-500 hover:text-white hover:bg-border"
              }`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
