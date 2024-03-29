import Image from 'next/image'
import React from 'react'

const arr = [
    {img: '/features/fast.svg', title: 'Быстрое решение', description: 'Наше ПО оптимизировано для быстрого выполнения транзакций и задач в сетях Web3.'},
    {img: '/features/security.svg', title: 'Безопасность', description: 'Мы используем передовые методы для обеспечения безопасности и конфиденциальности пользовательских данных.'},
    {img: '/features/convenience.svg', title: 'Удобство', description: 'Наши приложения просты в использовании и предоставляют интуитивно понятный интерфейс.'},
]
const Features = () => {
  return (
        <div id='features' className="flex flex-col gap-10 md:gap-20 px-3 sm:px-10 lg:px-20 relative">
            <Image src="/teamgrid.png" alt="backlight" width={868} height={1515} className=" absolute object-cover top-0 left-0 z-0 pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-black ">Эффективные приложения</h2>
        <p className="max-w-[1250px] lg:w-[60%]">
        WeMakeStars создает приложения для сетей Web3, которые помогают пользователям эффективно выполнять задачи.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32">
        {arr.map((el, index) => <div key={index} className="flex flex-col items-center sm:items-start gap-5 ">
            <div className="rounded-full p-3 bg-gradient-to-b from-[#222222] to-[#5D4073] border border-[#2D2D2D] flex items-center justify-center">
                <Image src={el.img} alt={el.title} width={46} height={46} />
            </div>
            <p className="font-black text-center sm:text-start">{el.title}</p>
            <p className="text-base text-center sm:text-start">{el.description}</p>
        </div>)}
      </div>
      </div>
  )
}

export default Features