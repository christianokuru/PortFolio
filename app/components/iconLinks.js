import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Github } from "lucide-react";
import { TwitterIcon, Send } from "lucide-react";
import whatsapp from "@/public/whatsapp.svg"; // This is a static SVG import
import gmail from "@/public/gmail.svg";
import Image from "next/image";

const socialLinks = [
    // The icons are a component in libraries.. so we pass them directly
    {
      name: "Github",
      link: "https://github.com/christianokuru",
      icon: <Github size={30} className="text-pink-700" />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: (
        <LinkedInLogoIcon width={30} height={24} className="text-blue-700" />
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: <TwitterIcon size={30} className="text-purple-700" />,
    },
    {
      name: "Telegram",
      link: "https://t.me/Bitter_noodles",
      icon: <Send size={24} className="text-blue-700" />,
    },
    // Whatsapp is a static image, so we pass the image URL to src and alt properly
    {
      name: "Whatsapp",
      link: "https://wa.me/09059952426",
      icon: <Image src={whatsapp} alt="whatsapp-icon" width={30} height={24} />,
    },
    {
      name: "Gmail",
      link: "mailto:okuruchristian@gmail.com",
      icon: <Image src={gmail} alt="gmail-icon" width={30} height={24} />,
    },
  ];

  export default socialLinks;