"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data

const about = {
  title: "About Me",
  description:
    "A software engineer with a passion for web development. I specialize in creating engaging and user-friendly interfaces using React, Next.js, and Tailwind CSS.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Austin Oblow",
    },
    {
      fieldName: "Phone",
      fieldValue: "(561-452-2064)",
    },
    {
      fieldName: "Experience",
      fieldValue: "Software Engineer bootcamp @ Flatiron",
    },
    {
      fieldName: "Github",
      fieldValue: "AustinO97",
    },
    {
      fieldName: "Email",
      fieldValue: "ausitnoblow97@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

//education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Flatiron School",
  description:
    "I worked on various projects, including a blog platform, a travel booking app, and a running shoe app. I'm currently focusing on building new websites using Next.js and Tailwind CSS.",
  items: [
    {
      institution: "Flatiron School",
      degree: "Full Stack Web Development Bootcamp",
      duration: "July 2023 - August 2024",
    },
  ],
};

//skills data

const skills = {
  title: "Technical Skills",
  skillList: [
    {
      skillName: "JavaScript",
      icon: <FaJs size={40} />,
    },
    {
      skillName: "React",
      icon: <FaReact size={40} />,
    },
    {
      skillName: "Next.js",
      icon: <SiNextdotjs size={40} />,
    },
    {
      skillName: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
    },
    {
      skillName: "HTML5",
      icon: <FaHtml5 size={40} />,
    },
    {
      skillName: "CSS3",
      icon: <FaCss3 size={40} />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="About me"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {about.info.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className="text-xl font-bold">
                            {item.fieldName}:
                          </span>{" "}
                          <span className="text-white/60">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-200">
                            {item.institution}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <p className="text-white/60">{item.duration}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3>{skills.title}</h3>
                  <p>{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip className="bg-[#232329] text-white/60 p-4 rounded-lg">
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-[#4F75FF] transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.skillName}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
