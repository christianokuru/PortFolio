/* eslint-disable react/no-unescaped-entities */
"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function About() {
  const about = {
    title: "About Me",
    description:
      "As a passionate front-end developer with a background in Electrical and Electronics Engineering, I love creating clean, user-friendly interfaces. My journey started with engineering, but my curiosity led me to web development, where I blend creativity with technical skills to build engaging digital experiences.",
    info: [
      { fieldName: "Name", fieldValue: "Okuru Christian" },
      { fieldName: "Phone", fieldValue: "(+234)9059952426" },
      { fieldName: "Experience", fieldValue: "1+ Years" },
      { fieldName: "Nationality", fieldValue: "Nigerian" },
      { fieldName: "Email", fieldValue: "okuruchristian@gmail.com" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Language", fieldValue: "English" },
    ],
  }

  const experience = {
    title: "My experience",
    description:
      "With hands-on experience in front-end development, I've worked on diverse projects that emphasize clean design, responsive layouts, and seamless user interactions. My focus is on delivering high-quality, intuitive web experiences.",
    items: [
      {
        company: "New Horizons, Abuja.",
        position: "Front-End Developer Trainee",
        duration: "February 2024 - April 2024",
      },
      {
        company: "HIQOS Technologies, Ikeja, Lagos.",
        position: "Front-End Developer Volunteer",
        duration: "July 2023 - November 2023",
      },
    ],
  }

  const education = {
    title: "My education",
    description:
      "I am a graduate from Afe Babalola University with a degree in Electrical and Electronics Engineering, where I developed a strong foundation in engineering principles and began my journey into front-end development.",
    items: [
      {
        school: "Afe-Babalola University, Ad0-Ekiti",
        degree: "Electrical/Electronics Engineering",
        duration: "Sept 2017 - Oct 2022",
      },
    ],
  }

  const skills = {
    title: "My skills",
    description:
      "I am proficient in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js and a bit of Node.js. I specialize in creating responsive, user-friendly interfaces using a mobile-first approach, with a strong focus on performance and clean design.",
    skillList: [
      { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
      { icon: <FaCss3 className="text-[#1572B6]" />, name: "CSS3" },
      { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
      { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
      {
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
        name: "Tailwind CSS",
      },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
  }

  return (
    <div className="px-6 lg:px-20 lg:mx-auto py-6 bg-background text-foreground min-h-screen">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Why hire me?
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-0 mb-8 lg:w-full lg:shadow lg:p-4 lg:rounded-xl lg:border lg:border-muted md:text-justify">
        With a focus on front-end development, I approach every project with
        precision, creativity, and a problem-solving mindset. My passion for
        building intuitive, high-performance interfaces ensures that your vision
        comes to life seamlessly and efficiently. Let's collaborate to turn your
        ideas into impactful digital experiences.
      </p>

      <Tabs defaultValue="experience" className="w-full md:flex md:space-x-8">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <div className="border border-border md:border-hidden md:shadow-none lg:border-hidden lg:shadow-none shadow-md pb-12 rounded-xl md:pb-0 md:pt-[101px]">
            <TabsList className="grid w-full grid-cols-2 gap-2 mb-6 md:flex md:flex-col md:items-stretch">
              <TabsTrigger
                value="experience"
                className="text-foreground py-3 rounded-md md:text-left md:pl-4 border border-border"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="text-foreground py-3 rounded-md md:text-left md:pl-4 border border-border"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="text-foreground py-3 rounded-md md:text-left md:pl-4 border border-border"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="text-foreground py-3 rounded-md md:text-left md:pl-4 border border-border"
              >
                About me
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="md:w-3/4 md:flex lg:flex lg:mt-[-7px] lg:shadow-lg lg:p-4 lg:rounded-xl lg:border lg:border-muted">
          <div className="lg:flex">
          <TabsContent value="experience" className="pt-7">
            <h3 className="lg:flex lg:justify-center lg:mt-[-37px] scroll-m-20 text-2xl font-semibold tracking-tight">
              {experience.title}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">
              {experience.description}
            </p>
            {experience.items.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {item.position}
                </h4>
                <p className="leading-7 [&:not(:first-child)]">
                  {item.company}
                </p>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              </div>
            ))}
          </TabsContent>
          </div>

          <TabsContent value="education" className="pt-7">
            <h3 className="lg:flex lg:justify-center lg:mt-[-37px] scroll-m-20 text-2xl font-semibold tracking-tight">
              {education.title}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">
              {education.description}
            </p>
            {education.items.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {item.degree}
                </h4>
                <p className="leading-7 [&:not(:first-child)]">{item.school}</p>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="pt-7">
            <h3 className="lg:flex lg:justify-center lg:mt-[-37px] scroll-m-20 text-2xl font-semibold tracking-tight">
              {skills.title}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">
              {skills.description}
            </p>
            <div className="grid grid-cols-4 gap-4">
              {skills.skillList.map((skill, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="bg-card p-4 rounded-lg flex items-center justify-center text-3xl shadow-lg border-2">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="pt-7">
            <h3 className="lg:flex lg:justify-center lg:mt-[-37px] scroll-m-20 text-2xl font-semibold tracking-tight">
              {about.title}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
              {about.description}
            </p>
            <ScrollArea className="h-[300px] pr-4">
              {about.info.map((item, index) => (
                <div
                  key={index}
                  className="leading-7 [&:not(:first-child)]:mt-6 mb-6 border-b border-mute"
                >
                  <span className="text-sm text-muted-foreground">
                    {item.fieldName}:
                  </span>{" "}
                  <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-base font-semibold">
                    {item.fieldValue}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}