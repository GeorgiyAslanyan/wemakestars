import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex relative px-20 ">
      <div className="flex flex-col gap-10 w-[60%] z-10">
        <h2 className="text-5xl font-black">
          WeMakeStars - приложение для Web3.0 сети{" "}
        </h2>
        <p className=" max-w-[1250px]">
          В основе приложения - децентрализованная нейронная сеть, позволяющая
          всем пользователям решать свои специфические задачи. Пользователи
          могут быстро получать доступ к продукту и необходимый результат с
          помощью простого и понятного клиентского интерфейса. Доступ к продукту
          предоставляется по модели SaaS (лицензия на программное обеспечение
          предоставляется по подписке).
        </p>
      </div>
      <div className="flex items-end justify-center flex-col gap-10 w-[40%] z-10">
        <Image
          src="/logobig.svg"
          alt="light"
          width={600}
          height={600}
          className="max-w-[300px] max-h-[300px] p-5 rounded-full bg-gradient-to-b backdrop-blur-xl from-[#22222250] to-[#5D407503] border border-[#4A2865] flex items-center justify-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/aboutlight.svg"
          alt="light"
          width={1250}
          height={600}
          className=" absolute right-0 w-[37%] -top-[200px]"
        />
        <Image
          src="/herostars.svg"
          alt="stars"
          width={1250}
          height={600}
          className="object-cover absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default About;
