import ShinyButton from "../ui/shiny-button";
import { Download, SparklesIcon } from "lucide-react";

export function ShinyButtonDemo({ text }) {
  return (
    <ShinyButton>
      <p
        className="flex cursor-pointer items-center "
      
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        {text}    
         <Download className="ml-2 " size={20}/>

      </p>
    </ShinyButton>
  );
}
