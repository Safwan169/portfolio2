import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text"; // Named import
import React from 'react'

const AnimateBtn = ({text}) => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
   <AnimatedGradientText>
             <span
               className={cn(
                 "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
               )}
             >
               {text}
             </span>
             {/* <ChevronRight
               className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
               size={16} // Set the size here
             /> */}
           </AnimatedGradientText>
    </div>
  )
}

export default AnimateBtn

