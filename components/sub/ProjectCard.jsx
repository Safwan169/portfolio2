import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import ShinyButton from "../ui/shiny-button";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

const ProjectCard = ({ src, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg z-20 border border-[#2A0E61]">
      
      
      
      <div className='relative w-full h-[250px]'>
          <img
            src={src}
            alt={title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img__hover'>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={'/link.svg'}
                alt='link'
                className='w-1/2 h-1/2 object-contain'
                // onClick={() => window.open(project_link, "_blank")}
              />
            </div>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={'/github.png'}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                // onClick={() => window.open(source_code_link, "_blank")}
              />
            </div>
          </div>
        </div>
      

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
