import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import ts from '../../../public/ts.png'
import nextjs from '../../../public/nextjs.jpeg'
import Ruby from '../../../public/ruby-img.png'
import python from '../../../public/python-png.png'
import git from '../../../public/git-img.png'
import dockerImg from '../../../public/docker-png.png'
import nest from '../../../public/nest-logo.png'
import aws from '../../../public/aws.jpg'
import sklearn from '../../../public/sklearn-logo.png'
import tensorflow from '../../../public/tensorflow-logo.jpg'
import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {

    const language = [
        {alt:"ts", img:ts},
        // {alt:"js", img:js},
        {alt:"python", img:python},
        {alt:"Ruby", img:Ruby},
        {alt:"docker", img:dockerImg},
        {alt:"aws", img:aws},
    ]
    const framework = [
        {alt:"nextjs", img:nextjs},
        {alt:"nest", img:nest},
        {alt:"sklearn", img:sklearn},
        {alt: 'tensorflow', img:tensorflow},
        {alt:"git", img:git},
    ]
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} >

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
        Currently, I am a fresher with a solid understanding of JavaScript, TypeScript, React, Ruby, Next.js, and Node.js. I specialize in building web applications and have experience in AI and ML engineering, working with Python, TensorFlow, Scikit-learn, PyTorch, and LLMs. Additionally, I have experience with AWS, focusing on cloud computing services (EC2, Lambda, ECR) and AI services (SageMaker, Textract, Comprehend, Bedrock).
        </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
          Languages and Tools
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Framework/Libraries and Version Control
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
