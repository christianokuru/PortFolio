"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import {
  ArrowRightCircle,
  Github,
  ExternalLink,
  Code2,
} from "lucide-react";
import Image from "next/image";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
        style={{
          left: `${15 + i * 12}%`,
          top: `${20 + (i % 4) * 20}%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${2 + i * 0.2}s`,
        }}
      />
    ))}
  </div>
);

const TechStackBadge = ({ tech }) => {
  const colors = {
    "Next.js":
      "from-gray-500/10 to-gray-600/10 border-gray-400/20 text-gray-700 dark:text-gray-300",
    React:
      "from-blue-500/10 to-blue-600/10 border-blue-400/20 text-blue-700 dark:text-blue-300",
    "Vue.js":
      "from-green-500/10 to-green-600/10 border-green-400/20 text-green-700 dark:text-green-300",
    Tailwind:
      "from-cyan-500/10 to-cyan-600/10 border-cyan-400/20 text-cyan-700 dark:text-cyan-300",
    Figma:
      "from-pink-500/10 to-pink-600/10 border-pink-400/20 text-pink-700 dark:text-pink-300",
    Shadcn:
      "from-purple-500/10 to-purple-600/10 border-purple-400/20 text-purple-700 dark:text-purple-300",
    "Sanity.io":
      "from-red-500/10 to-red-600/10 border-red-400/20 text-red-700 dark:text-red-300",
    CSS: "from-blue-500/10 to-blue-600/10 border-blue-400/20 text-blue-700 dark:text-blue-300",
    "Shadcn-Vue":
      "from-emerald-500/10 to-emerald-600/10 border-emerald-400/20 text-emerald-700 dark:text-emerald-300",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border transition-all duration-300 hover:scale-105 ${
        colors[tech] ||
        "from-gray-500/10 to-gray-600/10 border-gray-400/20 text-gray-700 dark:text-gray-300"
      }`}
    >
      {tech}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
   return (
    <div
      className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/50 dark:hover:border-white/20 hover:scale-[1.02] hover:-translate-y-2"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Project Number */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-6xl font-bold text-gray-200/50 dark:text-white/10 group-hover:text-gray-300/60 dark:group-hover:text-white/20 transition-colors duration-500">
          {project.id < 10 ? `0${project.id}` : project.id}
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mx-auto w-full max-w-md">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              {project.category}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.stack.map((tech, techIndex) => (
                  <TechStackBadge key={techIndex} tech={tech} />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                Live Demo
              </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-white/10 border border-gray-200/50 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/20 hover:scale-105"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-8">
              <Code2 className="w-4 h-4" />
              Featured Work
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in modern web
              development, from responsive designs to full-stack applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <a
              href="https://github.com/christianokuru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
