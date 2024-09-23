/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Blob from "./components/Blob";
import socialLinks from "@/app/components/iconLinks";

const commits = { commit: "31" };

export default function Home() {
  return (
    <>
      {/* <Blob /> */}
      <div className="pt-8 px-5 flex-col lg:pt-[130px] pb-3 text-center mx-auto border-b shadow rounded-xl border-border max-w-5xl">
        <div className="flex-col">
          <h1 className="text-muted-foreground pb-2 lg:pb-1">
            Front-End Developer
          </h1>
          <h1 className="font-bold text-primary text-6xl pb-2">
            Okuru Christian
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-3 lg:text-xl lg:py-2">
            I am a passionate front-end developer skilled in building modern,
            interactive web applications. With expertise in React, Tailwind CSS,
            Framer Motion, and Next.js, I create sleek, responsive, and highly
            dynamic user interfaces. Let's turn ideas into engaging digital
            experiences!
          </p>
        </div>
        {/* All the buttons */}
        <div className=" flex flex-col lg:gap-x-4 lg:pt-5 lg:flex lg:flex-row lg:justify-center">
          <div className="py-6 lg:py-0 md:py-9 lg:mr-7">
            <a href="/Okuru-frontend-dev-cv.pdf" download>
              <Button>Download CV</Button>
            </a>
          </div>
          {/* social media icons */}
          <div className="flex gap-x-6 items-center justify-center pb-5 lg:gap-x-8 md:gap-x-10">
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
        <div className="hidden md:justify-between md:px-3 md:flex md:py-8">
          <div className="flex space-x-2">
            <h1 className="text-5xl font-semibold text-foreground">2</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">Years of Exp</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <h1 className="text-5xl font-semibold text-foreground">2</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <h1 className="text-5xl font-semibold text-foreground">4</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">
                Technologies Mastered
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <h1 className="text-5xl font-semibold text-foreground">
              {commits.commit}
            </h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">Code Commits</p>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex justify-between mb-3 border border-accent rounded-xl p-5 mt-10 md:hidden">
          <div className="flex">
            <h1 className="text-5xl font-semibold">2</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground pl-3">
                Years of Exp
              </p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-5xl font-semibold">2</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground pl-3">
                Projects<br></br> Completed
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-5 space-between border border-accent rounded-xl p-5 md:hidden">
          <div className="flex">
            <h1 className="text-5xl font-semibold">4</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground pl-3">
                Technologies<br></br>Mastered
              </p>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-5xl font-semibold">{commits.commit}</h1>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground pl-3">
                Code Commits
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
