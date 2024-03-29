import Image from "next/image";
import React from "react";

const arr = [
    {img: '/services/saas.svg', title: 'SaaS', description: 'Мы предоставляем доступ к нашим приложениям через облачные сервисы. Это удобный способ использования ПО без необходимости его установки.'},
    {img: '/services/consult.svg', title: 'Консультации', description: 'Мы консультируем клиентов по вопросам использования различного программного обеспечения для повышения эффективности бизнеса.'},
    {img: '/services/dev.svg', title: 'Разработка', description: 'Мы разрабатываем кастомные программные решения под конкретные потребности заказчика.'},
]

const Services = () => {
  return (
    <div id="services" className="flex px-3 sm:px-10 lg:px-20 relative flex-col w-full items-center gap-10">
            <Image src="/teamgrid.png" alt="backlight" width={868} height={1515} className=" absolute object-cover top-0 right-0 scale-x-[-1] z-0 pointer-events-none" />

      <h2 className="text-3xl md:text-5xl font-black text-center">
        Главные услуги WeMakeStars
      </h2>
      <p className="text-center max-w-[1250px]">
      WeMakeStars предоставляет доступ к программному обеспечению через SaaS, консультирует по использованию программного обеспечения и занимается разработкой программного обеспечения на заказ.
      </p>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-10 z-10">
        {arr.map((el, index) => <div key={index} className="rounded-xl relative border border-[#2D2D2D] p-2 sm:p-6 flex flex-col items-center gap-5 bg-gradient-to-b from-[#2D2D2D] to-[#1F1F1F]">
            <Image src="/services/backlight.svg" alt="backlight" width={100} height={100} className="w-full pointer-events-none h-full absolute object-cover top-0 left-0 z-0" />
            <div className="rounded-full p-3 bg-gradient-to-b from-[#222222] to-[#5D4073] border border-[#2D2D2D] flex items-center justify-center">
                <Image src={el.img} alt={el.title} width={46} height={46} />
            </div>
            <p className="font-black text-center">{el.title}</p>
            <p className="text-base text-center">{el.description}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Services;
