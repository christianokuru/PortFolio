"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Blob from "./components/Blob";
import socialLinks from "@/app/components/iconLinks";

// Constants
const PERSONAL_INFO = {
  name: "Okuru Christian",
  title: "Front-End Developer",
  description: "I am a passionate front-end developer skilled in building modern, interactive web applications. With expertise in React, Tailwind CSS, Framer Motion, Vue.js and Next.js, I create sleek, responsive, and highly dynamic user interfaces. Let's turn ideas into engaging digital experiences!",
  cvPath: "/Okuru-Christian-Frontend-cv.pdf"
};

const METRICS = {
  yearsExp: 2,
  projectsCompleted: 10,
  technologiesMastered: 5,
  codeCommits: "500+"
};

// Components
const MetricItem = ({ 
  value, 
  label, 
  className = "" 
}: { 
  value: string | number; 
  label: string; 
  className?: string; 
}) => (
  <div className={`flex space-x-2 ${className}`}>
    <h1 className="text-5xl font-semibold text-foreground">{value}</h1>
    <div className="flex items-center">
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

const MobileMetricItem = ({ 
  value, 
  label 
}: { 
  value: string | number; 
  label: string; 
}) => (
  <div className="flex">
    <h1 className="text-5xl font-semibold">{value}</h1>
    <div className="flex items-center">
      <p className="text-sm text-muted-foreground pl-3">
        {label.includes(' ') ? (
          <>
            {label.split(' ')[0]}<br />
            {label.split(' ').slice(1).join(' ')}
          </>
        ) : (
          label
        )}
      </p>
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-x-6 items-center justify-center pb-5 lg:gap-x-8 md:gap-x-10">
    {socialLinks.map(({ link, icon }, index) => (
      <Link 
        key={index} 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        {icon}
      </Link>
    ))}
  </div>
);

const DesktopMetrics = () => (
  <div className="hidden md:justify-between md:px-3 md:flex md:py-8">
    <MetricItem value={METRICS.yearsExp} label="Years of Exp" />
    <MetricItem value={`${METRICS.projectsCompleted}+`} label="Projects Completed" />
    <MetricItem value={METRICS.technologiesMastered} label="Technologies Mastered" />
    <MetricItem value={METRICS.codeCommits} label="Code Commits" />
  </div>
);

const MobileMetrics = () => (
  <>
    <div className="flex justify-between mb-3 border border-accent rounded-xl p-5 mt-10 md:hidden">
      <MobileMetricItem value={METRICS.yearsExp} label="Years of Exp" />
      <MobileMetricItem value={METRICS.yearsExp} label="Projects Completed" />
    </div>
    
    <div className="flex space-x-5 space-between border border-accent rounded-xl p-5 md:hidden">
      <MobileMetricItem value={4} label="Technologies Mastered" />
      <MobileMetricItem value={METRICS.codeCommits} label="Code Commits" />
    </div>
  </>
);

const HeroContent = () => (
  <div className="flex-col">
    <h1 className="text-muted-foreground pb-2 lg:pb-1">
      {PERSONAL_INFO.title}
    </h1>
    <h1 className="font-bold text-primary text-6xl pb-2">
      {PERSONAL_INFO.name}
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-3 lg:text-xl lg:py-2">
      {PERSONAL_INFO.description}
    </p>
  </div>
);

const ActionButtons = () => (
  <div className="flex flex-col lg:gap-x-4 lg:pt-5 lg:flex lg:flex-row lg:justify-center">
    <div className="py-6 lg:py-0 md:py-9 lg:mr-7">
      <a href={PERSONAL_INFO.cvPath} download>
        <Button className="transition-all hover:scale-105">
          Download CV
        </Button>
      </a>
    </div>
    <SocialLinks />
  </div>
);

export default function Home() {
  return (
    <>
      {/* <Blob /> */}
      <div className="pt-8 px-5 flex-col lg:pt-[130px] pb-3 text-center mx-auto border-b shadow rounded-xl border-border max-w-5xl">
        <HeroContent />
        <ActionButtons />
        <DesktopMetrics />
        <MobileMetrics />
      </div>
    </>
  );
}