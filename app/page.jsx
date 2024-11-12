import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Works from "../components/main/Works"
import Contact from '../components/main/Contact';
// import Hero1 from '../components/main/Hero1';

export default function Home() {


  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <div className="bg-center z-30 bg-no-repeat bg-cover bg-hero-pattern">
          
        </div> */}
     
        <Skills />
        <Encryption />
        {/* <Projects /> */}
        <Works/>
        <div className="relative z-30 ">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </main>
  );
}
