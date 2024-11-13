
"use client"
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Works from "../components/main/Works"
import Contact from '../components/main/Contact';
import Hero1 from '../components/main/Hero1';
import ComputersCanvas from "@/components/sub/Computers";

export default function Home() {

    
 



  return (




   

    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

     
        <Skills />
        <Encryption />
        {/* <Projects /> */}
        <Works/>
        <div className="relative z-30 ">
          <Contact />
         
        </div>
      </div>
    </main>
  );
}
