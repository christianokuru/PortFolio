/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Blob from "./components/Blob";
import socialLinks from '@/app/components/iconLinks'

export default function Home() {
  

  return (
    <>
      <Blob />
      <div className="flex-col pt-[150px] pb-3 text-center mx-auto border-b rounded-xl border-border max-w-5xl">
        <div className="flex-col">
          <h1 className="text-muted-foreground">Front-End Developer</h1>
          <h1 className="font-bold text-primary text-6xl pb-4">
            Okuru Christian
          </h1>
          <p className="text-muted-foreground text-xl">
            Christian is a passionate front-end developer skilled in building
            modern, interactive web applications. With expertise in React,
            Tailwind CSS, Framer Motion, and Next.js, I create sleek,
            responsive, and highly dynamic user interfaces. Let's turn ideas
            into engaging digital experiences!
          </p>
        </div>
        {/* All the buttons */}
        <div className="flex items-center gap-x-9 py-9 justify-center">
          <div>
            <Button>Download CV</Button>
          </div>
          {/* social media icons */}
          <div className="flex gap-x-6 items-center">
            {socialLinks.map(({ link, icon }, index) => (
              <div key={index}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  {/* opens social links in new tabs */}
                  {icon}{" "}
                  {/* Now correctly handling React icons and static images */}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* My metrics */}
        <div className="flex justify-between px-3">
          <div className="flex">
            <h1 className="text-5xl font-semibold">2</h1>
            <div className="flex items-center">
              <p className="text-sm">Years of Exp.</p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-5xl font-semibold">2</h1>
            <div className="flex items-center">
              <p className="text-sm">Projects Completed.</p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-5xl font-semibold">4</h1>
            <div className="flex items-center">
              <p className="text-sm">Technologies Mastered.</p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-5xl font-semibold">17</h1>
            <div className="flex items-center">
              <p className="text-sm">Code Commits.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
