"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Darkmode } from "./Darkmode";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock (cross-browser safe)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-white/10 backdrop-blur-md border-b border-gray-200/50 dark:border-white/20 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-2xl lg:text-3xl font-bold transition-all duration-300 hover:scale-105"
              aria-label="Homepage"
            >
              <div className="relative">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Okuru
                </span>
                <span className="text-purple-600 dark:text-purple-500 group-hover:animate-pulse">
                  .
                </span>
              </div>
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "text-gray-900 dark:text-white bg-gradient-to-r from-purple-500/30 to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full border border-purple-400/50 dark:border-purple-400/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 rounded-full"
                    }`}
                    aria-label={`${link.name} page`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-sm -z-10"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <Button className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                  <span className="relative z-10">Hire me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity -z-10"></div>
                </Button>
              </Link>

              {/* Theme Toggle */}
              <div className="p-2 rounded-full bg-gray-100/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-colors">
                <Darkmode />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <div className="p-2 rounded-full bg-gray-100/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20">
                <Darkmode />
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-100/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-white" />
                ) : (
                  <HamburgerMenuIcon className="w-6 h-6 text-gray-700 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with backdrop */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop covers everything */}
        <div
          className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Menu */}
        <div
          className={`absolute top-16 left-0 right-0 mx-4 mt-4 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/20`}
        >
          <div className="py-6 px-4 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20 text-gray-900 dark:text-white border border-purple-400/50 dark:border-purple-400/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={toggleMenu}
                aria-label={`${item.name} page`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 px-6">
              <Link href="/contact" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Hire me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
