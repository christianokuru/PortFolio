"use client";
import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Code, Star, Phone, Mail, Globe, MapPin, FileText, Database, Zap, Layers, Palette, Globe2, Terminal, Wrench } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-300/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 -left-10 w-80 h-80 bg-blue-300/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute -bottom-10 right-1/3 w-72 h-72 bg-emerald-300/15 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 bg-purple-400/30 dark:bg-purple-400/20 rounded-full animate-pulse`}
        style={{
          left: `${15 + i * 12}%`,
          top: `${20 + (i % 4) * 20}%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${3 + i * 0.2}s`
        }}
      />
    ))}
  </div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const about = {
    title: "About Me",
    description: "As a passionate front-end developer with a background in Electrical and Electronics Engineering, I love creating clean, user-friendly interfaces. My journey started with engineering, but my curiosity led me to web development, where I blend creativity with technical skills to build engaging digital experiences.",
    info: [
      { fieldName: "Name", fieldValue: "Okuru Christian", icon: <User className="w-4 h-4" /> },
      { fieldName: "Phone", fieldValue: "(+234)9059952426", icon: <Phone className="w-4 h-4" /> },
      { fieldName: "Experience", fieldValue: "2+ Years", icon: <Briefcase className="w-4 h-4" /> },
      { fieldName: "Nationality", fieldValue: "Nigerian", icon: <MapPin className="w-4 h-4" /> },
      { fieldName: "Email", fieldValue: "okuruchristian@gmail.com", icon: <Mail className="w-4 h-4" /> },
      { fieldName: "Freelance", fieldValue: "Available", icon: <Star className="w-4 h-4" /> },
      { fieldName: "Language", fieldValue: "English", icon: <Globe className="w-4 h-4" /> },
    ],
  };

  const experience = {
    title: "My Experience",
    description: "With hands-on experience in front-end development, I've worked on diverse projects that emphasize clean design, responsive layouts, and seamless user interactions.",
    items: [
      {
        company: "BernodeHub, Calabar",
        position: "Front-End Developer",
        duration: "November 2024 - Present",
        type: "Full Time"
      },
      {
        company: "New Horizons, Abuja",
        position: "Front-End Developer Volunteer",
        duration: "February 2024 - April 2024",
        type: "Volunteer"
      },
    ],
  };

  const education = {
    title: "My Education",
    description: "Strong educational foundation in engineering with specialized focus on modern web development technologies.",
    items: [
      {
        school: "Afe-Babalola University, Ado-Ekiti",
        degree: "Electrical/Electronics Engineering",
        duration: "Sept 2017 - Oct 2022",
        grade: "B.Eng"
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description: "Proficient in modern web technologies with a focus on creating responsive, user-friendly interfaces using cutting-edge frameworks and tools.",
    skillList: [
      { icon: <FileText className="text-orange-500" />, name: "HTML5", level: 95 },
      { icon: <Palette className="text-blue-600" />, name: "CSS3", level: 90 },
      { icon: <Code className="text-yellow-500" />, name: "JavaScript", level: 88 },
      { icon: <Zap className="text-blue-400" />, name: "React", level: 50 },
      { icon: <Layers className="text-gray-800 dark:text-white" />, name: "Next.js", level: 85 },
      { icon: <Globe2 className="text-green-500" />, name: "Vue.js", level: 90 },
      { icon: <Globe className="text-green-600" />, name: "Nuxt.js", level: 100 },
      { icon: <Wrench className="text-cyan-500" />, name: "Tailwind CSS", level: 100 },
      { icon: <Terminal className="text-green-700" />, name: "Git", level: 85 },
    ],
  };

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'about', label: 'About me', icon: <User className="w-4 h-4" /> },
  ];

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={() => onClick(tab.id)}
      className={`group w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-gray-900 dark:text-white border border-purple-400/30 shadow-lg'
          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white border border-transparent hover:border-gray-200/50 dark:hover:border-white/10'
      }`}
    >
      <div className={`transition-colors ${isActive ? 'text-purple-600 dark:text-purple-400' : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'}`}>
        {tab.icon}
      </div>
      {tab.label}
    </button>
  );

  const SkillCard = ({ skill }) => (
    <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/50 dark:hover:border-white/20 hover:scale-105 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative text-center">
        <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">{skill.name}</h4>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
    </div>
  );

  const InfoCard = ({ item }) => (
    <div className="group flex items-center gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-xl border border-gray-200/50 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
      <div className="p-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
        {item.icon}
      </div>
      <div className="flex-1">
        <span className="text-sm text-gray-500 dark:text-gray-400 block">{item.fieldName}</span>
        <span className="font-semibold text-gray-800 dark:text-white">{item.fieldValue}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />
      
      <div className="relative z-10 container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-8">
            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
            Get to know me better
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
              Why Hire Me?
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With a focus on front-end development, I approach every project with precision, creativity, and a problem-solving mindset. My passion for building intuitive, high-performance interfaces ensures that your vision comes to life seamlessly and efficiently.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6">
                <div className="space-y-3">
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.id}
                      tab={tab}
                      isActive={activeTab === tab.id}
                      onClick={setActiveTab}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 min-h-[600px]">
              
              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{experience.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{experience.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {experience.items.map((item, index) => (
                      <div key={index} className="group relative bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.position}</h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">{item.company}</p>
                          </div>
                          <span className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{education.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{education.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {education.items.map((item, index) => (
                      <div key={index} className="group relative bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.degree}</h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">{item.school}</p>
                          </div>
                          <span className="px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm rounded-full">
                            {item.grade}
                          </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{skills.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{skills.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skills.skillList.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{about.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{about.description}</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {about.info.map((item, index) => (
                      <InfoCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}