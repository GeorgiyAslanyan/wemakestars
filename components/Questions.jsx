import Image from "next/image";
import React from "react";

const arr = [
  {
    question: "Что такое Web3.0 сеть?",
    answer:
      "Децентрализованное приложение, базируется на технологии блокчейн совместно с механизмом распределенного выполнения необходимых инструкций",
  },
  {
    question: "Что такое децентрализованная нейронная сеть?",
    answer:
      "Это искусственная нейронная сеть, которая не зависит от центрального органа власти и позволяет участвовать каждому.",
  },
  {
    question: "Что такое SaaS модель?",
    answer:
      "Мы предлагаем доступ к нашему программному обеспечению через Интернет на основе подписки.",
  },
  {
    question: "Могу ли я получить поддержку приложения?",
    answer:
      "Конечно! Мы предлагаем консультационные услуги по эффективному использованию нашего продукта.",
  },
];

const Questions = () => {
  return (
    <div className="flex flex-col relative items-center gap-20 px-20 ">
        <Image src="/aboutlight.svg" alt="question" width={400} height={250} className="absolute top-0 left-0 rotate-180 z-0 " />
        <Image src="/aboutlight.svg" alt="question" width={400} height={250} className="absolute top-0 right-0  z-0 " />

      <div className="w-full h-full absolute z-0 flex items-center justify-center pointer-events-none">

        <Image
          src="/herostars.svg"
          alt="stars"
          width={1250}
          height={600}
          className="object-cover absolute "
        />
      </div>
      <h2 className="text-5xl font-black">Остались вопросы?</h2>
      <div className="w-full grid grid-cols-2 gap-40 relative">
        {arr.map((el, index) => (
          <div key={index} className="flex flex-col items-start gap-3 z-10">
            <p className="font-black ">{el.question}</p>
            <p className="text-base ">{el.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
