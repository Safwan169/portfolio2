import { motion } from "framer-motion";
import { styles } from "../../styles";
import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromDown,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ShinyButtonDemo } from "../sub/ShineButton";
const Hero1 = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row relative   mt-40 w-full h-[400px] z-[20]"
    >
      {/* all text for hero section  */}
      <div
        className={`${styles.paddingX} absolute w-full    z-30 inset-0 left-0  flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          {/* name */}
          <motion.div variants={slideInFromRight(1)}>
            <h1 className={`${styles.heroHeadText} text-white  `}>
              Hi, I&apos;m <span className="text-[#915eff]">Safwan</span>
            </h1>
          </motion.div>

          {/* stack text  */}
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] mt-3 px-[9px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
             Junior Web Developer
            </h1>
          </motion.div>

          {/* summery  */}
          <div>
            <motion.div
              variants={slideInFromDown}
              className={` text-[#dfd9ff] font-medium lg:text-[15px] x1:text-[18px]   text-[14px] lg:leading-[30px]  w-[60%] my-5 text-white-100`}
            >
              I’m a Junior Web Developer passionate about creating
              engaging, responsive web experiences. Skilled in React.js,Next.js and
              experienced with building RESTful APIs using Node.js, Express, and
              MongoDB, I build seamless applications that connect dynamic front
              ends with powerful backends. I’m constantly honing my skills to
              contribute to impactful projects.
            </motion.div>
          </div>

          {/* resume download section */}
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.a
              href=" https://drive.usercontent.google.com/u/0/uc?id=1DNpG1DuY3SQQnLcG7C9dO42PpM20x7sv&export=download"
              download={
                " https://drive.usercontent.google.com/u/0/uc?id=1DNpG1DuY3SQQnLcG7C9dO42PpM20x7sv&export=download"
              }
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              <ShinyButtonDemo text={" Resume"} />
            </motion.a>
          </div>
        </div>
      </div>

    

  <div className="z-50   md:w-[40%] lg:w-fit absolute right-0 "> 
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-fit text-end   h-[400px]  z-30 flex justify-end"
      >
        <img className="    w-fit  "
        src="/mainIconsdark.svg"
        alt="work icons"
      />

      </motion.div>
      </div> 
    
    </motion.div>
  );
};

export default Hero1;
