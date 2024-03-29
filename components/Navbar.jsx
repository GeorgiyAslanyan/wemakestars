import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="text-base fixed top-0 left-0 w-full flex items-center justify-center z-50 p-2 sm:p-5">
        <div className="px-3 sm:px-5 py-2 sm:py-3 gap-5 flex justify-between items-center w-[1250px] max-w-[1250px] rounded-full bg-gradient-to-r from-[#15151970] to-[#15151960] backdrop-blur-lg border border-[#2D2D2D]">
            <Image src="/logo.png" alt="logo" className='hidden sm:flex' width={101} height={51} />
            <Image src="/logobig.svg" alt="logo" className='flex sm:hidden' width={41} height={41} />
            <div className="gap-5 hidden lg:flex items-center">
                <a href="#services">Услуги</a>
                <a href="#about">О нас</a>
                <a href="#features">Особенности</a>
                <a href="#team">Команда</a>
                <a href="#questions">Вопросы</a>
                <a href="#vacancies">Вакансии</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://instagram.com/wemakestars?igshid=MWI4MTIyMDE=" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 justify-center rounded-full bg-gradient-to-b from-[#222222] to-[#5D4073] border border-[#4A2865] duration-100 ease-linear transition-all shadow-[0_0_25px_0_rgb(143,0,255,0)]  hover:shadow-[0_0_25px_0_rgb(143,0,255)]">
                    <Image src="/inst.svg" alt="inst" width={25} height={25} />
                </a>
                <a href="https://instagram.com/wemakestars?igshid=MWI4MTIyMDE=" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base px-5 py-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#D5A0FF] to-[#7827B7] border border-[#502D6C] duration-100 ease-linear transition-all shadow-[0_0_25px_0_rgb(143,0,255,0)]  hover:shadow-[0_0_25px_0_rgb(143,0,255)]">
                    GET STARTED
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar