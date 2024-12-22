
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Works from "../components/main/Works";
import Contact from "../components/main/Contact";

export default function Home() {
  return (
    <main className="h-full  w-full">
      <div className="flex flex-col gap-0 lg:gap-20">
        <Hero />

        <Skills />
        <Encryption />
        <Works />
        <div className="relative z-30 ">
          <Contact />
        </div>
      </div>
    </main>
  );
}
