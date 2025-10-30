"use client";
/* eslint-disable react/prop-types */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import { github, link } from "../../public";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../project/index";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  project_link,
  source_code_link,
}) => {
  return (
    // <div className="relative text-center overflow-hidden rounded-lg shadow-lg z-20 border border-[#2A0E61]">
    <div className="z-20">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary  z-30 border border-[#2A0E61]  rounded-lg  md:w-[320px] w-full  lg:w-[360px]"
        >
          {/* this is for images and icons  */}
          <div className="relative w-full -p-10 h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full bg-contain  "
            />
            <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img__hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={"/link.svg"}
                  alt="link"
                  className="w-1/2 h-1/2 object-contain"
                  onClick={() => window.open(project_link, "_blank")}
                />
              </div>
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={"/github.png"}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                  onClick={() => window.open(source_code_link, "_blank")}
                />
              </div>
            </div>
          </div>

          {/* this is for description and technologies  */}
          <div className="mt-5 px-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex pb-4 px-5 justify-around flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    // this is for project heading text
    <div
      className="flex flex-col items-center justify-center   mx-0 py-20"
      id="projects"
    >
      <motion.div variants={textVariant()}>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12">
          My Projects
        </h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* this is for map in project data which is into the top  */}
      <div className="mt-20  flex justify-around flex-wrap gap-5 md:gap-2  xl:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
