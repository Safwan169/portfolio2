import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full z-40 h-full bg-transparent mt-10 lg:mt-20 md:mt-16 text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full z-40 flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex  z-20 flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                
                    <a href="https://github.com/Safwan169" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo  />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://discord.gg/jqsccqRs" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo  />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                </div>
                <div className="min-w-[200px] z-20 h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    
                   
                    <a href="https://www.linkedin.com/in/safwan16/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo  />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">safwanhossainmridul@gmail.com</span>    
                    </p>
                </div>
                <div className="min-w-[200px] z-20 h-auto flex flex-col items-center justify-start">
                    <a href="#about-me" className="font-bold text-[16px]">About</a >
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <a href="#about-me" className="text-[15px] ml-[6px]">Learning about me </a>    
                    </p>
                    
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Safwan Hossain 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer