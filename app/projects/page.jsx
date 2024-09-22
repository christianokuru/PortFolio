import Image from "next/image";
import project1 from "@/public/projects/ui-ux-design.png"
import { ArrowRightCircle, Github } from "lucide-react";
import Link from "next/link";

const links = {
    uiux: 'https://nextjs2-9g16q0pd1-okuruchristian-gmailcoms-projects.vercel.app/',
    uiuxGit: 'https://google.com'
};


export default function Projects() {
  return (
    <div className="flex flex-col px-4">
      <div className="border w-full flex justify-center">
        <h2 className="">My Projects</h2>
        {/* image */}
      </div>
      <div className="border">
      <Image src={project1} alt="Project-1 h-30 w-30" />
      </div>
      {/* index and the rest */}
      <div>
        <h1>01</h1>
        <h2>Frontend Project</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum ipsam, nihil quisquam expedita optio. Natus consectetur incidunt minima maiores!</p>
        {/* languages/stack */}
        <div className="flex border-b-2">
            <p>Next.js,</p>
            <p>Tailwind CSS,</p>
            <p>Figma</p>
        </div>
        {/* links and icons */}
        <div className="flex gap-3">
            <Link href={links.uiux} target="_blank" >
            <ArrowRightCircle className="text-green-600" width={30} height={30}/>
            </Link>
            <Link href={links.uiuxGit} target="_blank" >
            <Github className="text-purple-600 " width={30} height={30}/>
            </Link>
        </div>
      </div>

    </div>
  );
}
