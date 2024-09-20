import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {
  const about = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    info: [
      { fieldName: "Name", fieldValue: "Luke Smith" },
      { fieldName: "Phone", fieldValue: "+1234567890" },
      { fieldName: "Experience", fieldValue: "5+ Years" },
      { fieldName: "Nationality", fieldValue: "American" },
      { fieldName: "Email", fieldValue: "luke.smith@example.com" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Language", fieldValue: "English" },
    ],
  };

  const experience = {
    title: "My experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    items: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Front-End Developer",
        duration: "2020 - Present",
      },
      {
        company: "Web Innovators LLC",
        position: "Front-End Developer",
        duration: "2018 - 2020",
      },
    ],
  };

  const education = {
    title: "My education",
    description: "Graduated from Afe Babalola University with a degree in Electrical and Electronics Engineering, where I developed a strong foundation in engineering principles and began my journey into front-end development.",
    items: [
      {
        school: "Afe-Babalola University, Ad0-Ekiti",
        degree: "Electrical/Electronics Engineering",
        duration: "Sept 2017 - Oct 2022",
      },
    ],
  };

  const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    skillList: [
      { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
      { icon: <FaCss3 className="text-[#1572B6]" />, name: "CSS3" },
      { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
      { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
      { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
  };

  return (
    <div className="px-4 py-6 bg-background text-foreground min-h-screen">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Why hire me?</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-0 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <Tabs defaultValue="experience" className="w-full">
        <div className="border border-border pb-12 rounded-xl">
        <TabsList className="grid w-full grid-cols-2 gap-2 mb-6">
          <TabsTrigger value="experience" className=" text-foreground py-3 rounded-md">Experience</TabsTrigger>
          <TabsTrigger value="education" className=" text-foreground py-3 rounded-md">Education</TabsTrigger>
          <TabsTrigger value="skills" className="text-foreground py-3 rounded-md">Skills</TabsTrigger>
          <TabsTrigger value="about" className="text-foreground py-3 rounded-md">About me</TabsTrigger>
        </TabsList>
        </div>
        
        {/* TABS CONTENT */}
        <TabsContent value="experience" className="pt-7">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{experience.title}</h3>
          <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">{experience.description}</p>
          {experience.items.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{item.position}</h4>
              <p className="leading-7 [&:not(:first-child)]">{item.company}</p>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="education" className="pt-7">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{education.title}</h3>
          <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">{education.description}</p>
          {education.items.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{item.degree}</h4>
              <p className="leading-7 [&:not(:first-child)]">{item.school}</p>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="skills" className="pt-7">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{skills.title}</h3>
          <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">{skills.description}</p>
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
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{about.title}</h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">{about.description}</p>
          <ScrollArea className="h-[300px] pr-4">
            {about.info.map((item, index) => (
              <div key={index} className="leading-7 [&:not(:first-child)]:mt-6 mb-6 border-b border-mute">
                <span className="text-sm text-muted-foreground">{item.fieldName}:</span>{' '}
                <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-base font-semibold">{item.fieldValue}</span>
              </div>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}