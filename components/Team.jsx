import Image from 'next/image'
import React from 'react'

const arr = [
    { title: 'Мамонов Роман Григорьевич', description1: 'Chief Executive Officer', description2: 'Исполнительный директор', description3: 'Предприниматель , соучредитель и продюсер группы компаний Physical Transformation, бизнес-наставник '},
    {title: 'Кацупко Михаил Александрович', description1: 'Chief Technical Officer', description2: 'Технический директор', description3: 'С 2001 года в коммерческой разработке. В разное время работал с компаниями Mail.ru, Yandex, 4game, Plesk. Специалист по созданию нейронных сетей, PyTorch. До работы в компании преподавал в одном из престижных физико-технических университетов РФ. Победитель и призер международных соревнований по программированию (Kaggle competitions).'},
]

const Team = () => {
  return (
    <div className="flex flex-col relative items-center gap-20 px-20 ">
      <div className="w-full h-full absolute z-0 flex items-center justify-center pointer-events-none">
      <Image src="/herolight.svg" alt="light" width={1250} height={600} className="object-cover absolute" />
      <Image src="/herostars.svg" alt="stars" width={1250} height={600} className="object-cover absolute " />
      </div>
        <h2 className="text-5xl font-black">Наша команда</h2>
        <div className="w-full grid grid-cols-2 gap-10">
        {arr.map((el, index) => <div key={index} className="flex flex-col items-start relative gap-3 p-5 rounded-xl backdrop-blur-xl bg-gradient-to-t from-[#2D2D2D50] to-[#1F1F1F50] border border-[#2D2D2D]">
        {/* <Image src="/services/backlight.svg" alt="backlight" width={1000} height={1000} className="w-full h-full absolute object-cover top-0 left-0 z-0" /> */}
            <p className="font-black ">{el.title}</p>
            <p className="text-base font-bold">{el.description1} | {el.description2}</p>
            <p className="text-base ">{el.description3}</p>
        </div>)}
      </div>
      </div>
  )
}

export default Team