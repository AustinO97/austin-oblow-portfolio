"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsGithub,
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "1",
    category: "front-end",
    title: "trip planner",
    description:
      "Trip Planner is a single page application that allows you to like any of the trips on the page. Users are able to search for any trips by typing in the search bar. Users are able to add a trip by typing in the name of the destination, adding a picture URL, and a description.",
    stack: [
      { name: "JavaScript", icon: <BsArrowUpRight size={24} /> },
      { name: "React", icon: <BsArrowUpRight size={24} /> },
    ],
    image: "/assets/projects/trip-planner.png",
    github: "https://github.com/AustinO97/trip-planner",
  },
  {
    num: "2",
    category: "back-end",
    title: "pet store",
    description:
      "Pet Store is a CLI application that allows you to manage pets and manage stores. Users can add, view, update and delete pets / stores.",
    stack: [{ name: "Python", icon: <BsArrowUpRight size={24} /> }],
    image: "/assets/projects/pet-store.png",
    github: "https://github.com/AustinO97/pet-store",
  },
  {
    num: "3",
    category: "full-stack",
    title: "shoe box",
    description:
      "ShoeBox is a full-stack web application built with Flask for the backend and React for the frontend. This application allows users to manage their shoe collection, including adding, editing, reviewing, and categorizing shoes. Users can interact with the database to create, read, update, and delete shoe entries and reviews.",
    stack: [
      { name: "JavaScript", icon: <BsArrowUpRight size={24} /> },
      { name: "React", icon: <BsArrowUpRight size={24} /> },
      { name: "Python", icon: <BsArrowUpRight size={24} /> },
      { name: "Flask", icon: <BsArrowUpRight size={24} /> },
    ],
    image: "/assets/projects/shoe-box.png",
    github: "https://github.com/AustinO97/shoe-box",
  },
];

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const project = projects[projectIndex];

  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-300 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-3">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-yellow-200">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#4F75FF]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-items-start gap-2">
            <Button onClick={handlePreviousProject}>
              <BsArrowLeft />
            </Button>
            <Button onClick={handleNextProject}>
              <BsArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
