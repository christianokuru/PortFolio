"use client";
import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, Code, Zap, Users, GitBranch } from 'lucide-react';

// Mock social links data
const socialLinks = [
  { link: "https://github.com/christianokuru", icon: <Github className="w-6 h-6" />, label: "GitHub" },
  { link: "https://linkedin.com/in/christianokuru", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
  { link: "mailto:okuruchristian@gmail.com", icon: <Mail className="w-6 h-6" />, label: "Email" },
];

// Constants
const PERSONAL_INFO = {
  name: "Okuru Christian",
  title: "Front-End Web Developer",
  description: "I craft exceptional digital experiences with modern web technologies. Specializing in React, Next.js, Vue.js, Nuxt.js, and Tailwind CSS to bring innovative ideas to life.",
  cvPath: "/FRONTEND - OKURU CHRISTIAN.pdf"
};

const METRICS = [
  { value: 4, label: "Years Experience", icon: <Zap className="w-5 h-5" />, suffix: "" },
  { value: 10, label: "Projects Delivered", icon: <Code className="w-5 h-5" />, suffix: "+" },
  { value: 5, label: "Technologies", icon: <Users className="w-5 h-5" />, suffix: "" },
  { value: 500, label: "Commits", icon: <GitBranch className="w-5 h-5" />, suffix: "+" }
];

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>
);

const GlowingButton = ({ children, href, download, className = "" }) => (
  <a 
    href={href} 
    download={download}
    className={`group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-1 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative flex items-center gap-2">
      {children}
    </div>
  </a>
);

const MetricCard = ({ metric, index }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = metric.value / 50;
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev >= metric.value) {
            clearInterval(counter);
            return metric.value;
          }
          return Math.min(prev + increment, metric.value);
        });
      }, 50);
      return () => clearInterval(counter);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [metric.value, index]);

  return (
    <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/50 dark:hover:border-white/20 hover:scale-105 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-lg">
            {metric.icon}
          </div>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-gray-300" />
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {Math.floor(count)}{metric.suffix}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {metric.label}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ link }) => (
  <a
    href={link.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/50 dark:hover:border-white/20 hover:scale-110 hover:-translate-y-1"
    title={link.label}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
      {link.icon}
    </div>
  </a>
);

const FloatingElements = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + (i % 3) * 20}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${2 + i * 0.3}s`
        }}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-8">
              <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 mb-8 font-medium">
              {PERSONAL_INFO.title}
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {PERSONAL_INFO.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowingButton href={PERSONAL_INFO.cvPath} download>
                <Download className="w-5 h-5" />
                Download Resume
              </GlowingButton>
              
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} link={link} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {METRICS.map((metric, index) => (
              <MetricCard key={index} metric={metric} index={index} />
            ))}
          </div>
          
          {/* Tech Stack Preview */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8">Technologies I Master</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <div className="group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 border border-blue-400/20 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">React</span>
              </div>
              <div className="group px-6 py-3 bg-gradient-to-r from-purple-500/10 to-purple-600/10 dark:from-purple-500/20 dark:to-purple-600/20 border border-purple-400/20 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">Next.js</span>
              </div>
              <div className="group px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 dark:from-emerald-500/20 dark:to-emerald-600/20 border border-emerald-400/20 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">Vue.js</span>
              </div>
              <div className="group px-6 py-3 bg-gradient-to-r from-green-500/10 to-green-600/10 dark:from-green-500/20 dark:to-green-600/20 border border-green-400/20 dark:border-green-400/30 text-green-700 dark:text-green-300 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">Nuxt.js</span>
              </div>
              <div className="group px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 dark:from-cyan-500/20 dark:to-cyan-600/20 border border-cyan-400/20 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="group px-6 py-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 dark:from-orange-500/20 dark:to-orange-600/20 border border-orange-400/20 dark:border-orange-400/30 text-orange-700 dark:text-orange-300 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                <span className="font-medium">GSAP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}