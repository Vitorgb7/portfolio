import { cn } from "@/lib/utils";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Instagram", link: "https://www.instagram.com/vitor_gb04/", icon: <Instagram /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/vitor-gabriel-silva-lima", icon: <Linkedin /> },
    { name: "Facebook", link: "https://www.facebook.com/vitorgabriel.bielgb/", icon: <Facebook /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
