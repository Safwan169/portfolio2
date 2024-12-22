import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[60px]   fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 x1:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold md:text-[17px] lg:text-xl x1:text-xl ml-0 lg:ml-[10px] hidden md:block text-gray-300">
            Safwan Hossain
          </span>
        </a>

        <div className="md:w-[400px] lg:w-[500px]  h-full flex flex-row items-center justify-between lg:mr-24">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex z-30 flex-row gap-5">
          {Socials.map((social) => (
          <>
           
            <a href={social.href}>
            <Image sizes="30"
              src={social.src}
              
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
