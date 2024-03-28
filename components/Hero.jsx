import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center  relative">
        
      <div className="w-full h-full absolute z-0 flex items-center justify-center pointer-events-none">
      <Image src="/herogrid.svg" alt="grid" width={1250} height={600} className="object-cover w-full h-full" />
      <Image src="/herolight.svg" alt="light" width={1250} height={600} className="object-cover absolute" />
      <Image src="/herostars.svg" alt="stars" width={1250} height={600} className="object-cover absolute " />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 relative z-10">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#AFAFAF] to-white">WeMakeStars</h1>
        <p className="text-center  max-w-[900px]">
          Ваш надежный партнер в сфере веб-разработки и создания программного
          обеспечения
        </p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-base flex items-center w-fit justify-center rounded-full bg-gradient-to-b from-[#D5A0FF] to-[#7827B7] border border-[#502D6C] shadow-[0_0_25px_0_rgb(143,0,255)]"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default Hero;
