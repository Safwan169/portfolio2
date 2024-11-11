import OrbitingCircles from "../ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex  h-[400px]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-transparent text-center text-8xl font-semibold leading-none text-red-400  dark:to-black"></span> */}

  {/* node */}
      <OrbitingCircles
        className="size-[30px] border-none "
        duration={20}
        delay={4}
        radius={80}
      >
        <img src="/node-js.png" height={50} width={50} alt="" />
      </OrbitingCircles>
      {/* git */}
      <OrbitingCircles
        className="size-[20px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <img src="/gitwhite.png" height={45} width={45} alt="" />
      </OrbitingCircles>
      {/* js */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={18}
        radius={89}
      >
        <img src="/express.png" height={50} width={50} alt="" />
        </OrbitingCircles>
      {/* tailwind css */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={89}
      >
        <img src="/tailwind.png" height={63} width={63} alt="" />
        </OrbitingCircles>
        {/* mongodb */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        radius={89}
        delay={21}

      >
        <img src="/mongodb.png" height={30} width={30} alt="" />
        </OrbitingCircles>
        {/* express */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        radius={89}
        delay={27.3}

      >
        <img src="/jwt.png" height={50} width={50} alt="" />
        </OrbitingCircles>
        {/* next */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        radius={89}
        delay={32.3}

      >
        <img src="/next.png" height={47} width={47} alt="" />
        </OrbitingCircles>

    
      {/* react */}
      <OrbitingCircles
        className="size-[50px] border-none animate-customSpin bg-transparent"
        radius={0}
        
        duration={20}
        delay={20}
        reverse
      >
        <img src="/react.png" height={50} width={50} alt="" />
        </OrbitingCircles>
    </div>
  );
}

const Icons = {
  react: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* React icon SVG path */}
      <path d="M12 0c4.97 0 9.126 3.64 10.606 8.406l1.743-.966c-.82-2.834-2.53-5.29-4.946-6.966C16.342.31 14.188 0 12 0c-2.188 0-4.342.31-6.403.874C3.182 2.55 1.47 5.006.65 7.84l1.743.966C2.874 3.64 7.03 0 12 0z" />
    </svg>
  ),
  node: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* Node.js icon SVG path */}
      <path d="M12 0L.5 6v12L12 24l11.5-6V6L12 0zm.9 17.7c-1.1.6-2.5.4-3.5-.3-.4-.3-.7-.7-.9-1.1l-2.1 1.3C8.3 19.9 10.1 20 12 18.9s3.2-2.8 3.1-4.8-.9-3.8-3-4.7z" />
    </svg>
  ),
  tailwind: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* Tailwind CSS icon SVG path */}
      <path d="M10.7 0a8.42 8.42 0 00-7.4 5.8C1 13.5 6 21.2 11.4 24s9.4-1.3 10.6-6.6C22 6.5 16.2-1.4 10.7 0z" />
    </svg>
  ),
  express: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* Express.js icon SVG path */}
      <path d="M12 0L.5 6v12L12 24l11.5-6V6L12 0zm.9 17.7c-1.1.6-2.5.4-3.5-.3-.4-.3-.7-.7-.9-1.1l-2.1 1.3C8.3 19.9 10.1 20 12 18.9s3.2-2.8 3.1-4.8-.9-3.8-3-4.7z" />
    </svg>
  ),
  mongodb: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* MongoDB icon SVG path */}
      <path d="M12 0C8 6.75 7 13 7 18.5c0 4.5 3.67 5.83 5 5.5s5-1.5 5-5.5c0-5.5-1-11.75-5-18.5z" />
    </svg>
  ),
  nextjs: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* Next.js icon SVG path */}
      <path d="M12 2a10 10 0 00-7.16 17.19c.62.4 1.3.75 2 .96.7.2 1.4.35 2.1.44h2.06c.7-.1 1.4-.25 2.1-.44.7-.21 1.38-.56 2-.96A10 10 0 0012 2z" />
    </svg>
  ),
  firebase: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      {/* Firebase icon SVG path */}
      <path d="M3.89 15.67l3.57-7.83 2.36 3.53L8 18.61l-4.11-2.94zM13.65 3.94L9 12.84l3.55 5.77 4.44-8.5-3.34-6.17z" />
    </svg>
  ),
};
