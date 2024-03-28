import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Vacancies from "@/components/Vacancies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-2xl text-white min-h-screen  flex-col bg-[#1F1E1C]">
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-36 pb-10">
        <Services />
        <About/>
        <Features />
        <Team />
        <Questions />
        <Vacancies />
      </div>
    </main>
  );
}
