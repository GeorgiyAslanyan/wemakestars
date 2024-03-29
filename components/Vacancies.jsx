import Image from "next/image";
import React from "react";

const Vacancies = () => {
  return (
    <div id="vacancies" className="px-3 sm:px-10 lg:px-20 flex items-center justify-center">
      <div className="w-[1000px] max-w-[1000px] rounded-xl relative border border-[#2D2D2D] px-5 lg:px-[200px] flex flex-col py-12 sm:py-24 items-center gap-10 bg-gradient-to-b from-[#2D2D2D60] to-[#15151960]">
        <Image
          src="/services/backlight.svg"
          alt="backlight"
          width={1000}
          height={1000}
          className="w-full h-full absolute pointer-events-none object-cover top-0 left-0 z-0"
        />
        <p className="font-black text-center">Успей присоединиться к нашей команде</p>
        <p  className="text-base text-center">
          В WeMakeStars работает команда талантливых специалистов в области
          веб-дизайна и разработки программного обеспечения. Мы гордимся нашими
          экспертами и их вкладом в успех наших проектов.
        </p>
        <a
          href="https://instagram.com/wemakestars?igshid=MWI4MTIyMDE="
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit bg-white hover:bg-[#7827B7] hover:text-white duration-100 ease-linear transition-all px-4 py-2 text-black rounded-lg text-base"
        >
          Присоединиться
        </a>
      </div>
    </div>
  );
};

export default Vacancies;
