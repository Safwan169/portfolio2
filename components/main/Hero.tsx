"use client"
// import HeroContent from "../sub/HeroContent";
import Hero1 from "./Hero1";

const Hero = () => {


  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-229px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      {/* <HeroContent /> */}
      <div className="bg-center h-full z-30 bg-no-repeat bg-cover bg-hero-pattern">
        <Hero1  />
      </div>
    </div>
  );
};

export default Hero;
