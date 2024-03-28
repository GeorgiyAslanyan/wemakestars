import Image from "next/image";
import React from "react";

const Vacancies = () => {
  return (
    <div className="px-20 flex items-center justify-center">
      <div className="w-[1000px] max-w-[1000px] rounded-xl relative border border-[#4A2865] px-[200px] flex flex-col py-24 items-center gap-10 bg-gradient-to-b from-[#2D2D2D] to-[#1F1F1F]">
        <Image
          src="/services/backlight.svg"
          alt="backlight"
          width={1000}
          height={1000}
          className="w-full h-full absolute pointer-events-none object-cover top-0 left-0 z-0"
        />
        <p className="font-black">Успей присоединиться к нашей команде</p>
        <p  className="text-base text-center">
          В WeMakeStars работает команда талантливых специалистов в области
          веб-дизайна и разработки программного обеспечения. Мы гордимся нашими
          экспертами и их вкладом в успех наших проектов.
        </p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit bg-white px-4 py-2 text-black rounded-lg text-base"
        >
          Присоединиться
        </a>
      </div>
    </div>
  );
};

export default Vacancies;
