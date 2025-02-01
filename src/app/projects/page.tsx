import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "AvaliaEdu - Plataform for school managers",
      description:
        `The Avalia-Edu was a platform for school managers of the Department of Education of São Lourenço da Mata, aimed at providing direct assistance in day-to-day activities and in semester evaluations.`,
      tags: ["React.js", "React Router", "Css Module"],
      link: "https://plataforma-pedagogica-main.vercel.app/",
    },
   
    {
      title: "AI recognition - website for superhero fans.",
      description:
        "Inside the application, fans can take tests with their photos to see which superhero category they belong to based on their traits. There is a discussion forum for fans, along with a brief explanation of each area of each superhero team.",
      tags: ["React.js", "Javascript", "Css Module"],
      link: "https://github.com/Vitorgb7/Reconhecimento-IA",
    },
    {
      title: "API with Clean Architecture",
      description:
        "API developed following development and architectural standards such as Clean Architecture, SOLID principles, TDD, and design patterns, utilizing Node.js and Express, focusing on the user registration flow within the system.",
      tags: ["Node.js", "Typescript", "MongoDB"],
      link: "https://github.com/Vitorgb7/clean-node-api",
    },
    {
      title: "Senses - An app aimed at improving communication for children with autism.",
      description:
        "A React Native application designed to facilitate communication for children and young people with autism who struggle to communicate with others. The app aims to encourage, engage, and stimulate communication in a clean and highly interactive manner with the user, who in this case are the children.",
      tags: ["React-Native", "Clerk", "Expo"],
      link: "https://agencyhorizon.com.br/senses",
    },
    {
      title: "E-commerce with Next.js",
      description:
        "An e-commerce application built with Next.js (App Router) featuring tests with Cypress. It is responsive and utilizes many Next.js techniques, including persistence, server-side rendering (SSR), the use client directive, and other exciting features of Next.js.",
      tags: ["Nextjs", "App Router", "Cypress"],
      link: "#",
    }
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I am constantly contributing to projects that have a direct impact on consumers. By building projects related to the 17 SDG topics, with innovation and resilience, I can implement technology as a means to help in everyday life. Feel free to explore this showcase of my passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
