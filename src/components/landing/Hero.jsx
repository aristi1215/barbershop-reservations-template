import { Header } from "../Header";
import { AnimatedLogo } from "../animated/AnimatedLogo";

export const Hero = () => {
  
  return (
    <section className="relative pt-20 md:pt-0">
      {/* Capa oscura */}
      <div className="absolute z-10 inset-0 bg-black/85"></div>
      <div className="absolute inset-0 bg-cover bg-bottom bg-[url('/imgs/hero.jpg')] blur-sm"></div>

        <Header />

      <main className="relative z-10 flex justify-center h-[70%] text-white text-center">
        <AnimatedLogo/>
      </main>
    </section>
  );
};
