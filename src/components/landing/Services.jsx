import { AnimatedShowCardsInView } from "../animated/AnimatedShowCardsInView"

export const Services = () => {
    const isMobile = window.innerWidth < 768;
  return (
    <section className=" text-center bg-[url('imgs/services.jpg')] bg-cover text-white py-10 gap-4 flex flex-col">
        <header className="mb-10">
            <small className="text-p-yellow">OUR TREATMENT</small>
            <h2 className="text-3xl md:text-[3rem]">Services</h2>
        </header>
        <main className="flex justify-center px-5 md:gap-6 md:flex-row">
      <div className="md:w-[40%]">
        <AnimatedShowCardsInView
          initial="-100%"
          title="Haircut & beard trim"
          image="/icons/scissors.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores pariatur rem obcaecati voluptas laboriosam."
        />

        <AnimatedShowCardsInView
          initial={`${isMobile ? '100%' : '-100%'}`}
          title="Haircut & beard trim"
          image="/icons/beard.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores pariatur rem obcaecati voluptas laboriosam."
        />
      </div>

      <div className="hidden md:block md:w-[40%]">
        <AnimatedShowCardsInView
          initial="100%"
          title="Haircut & beard trim"
          image="/icons/scissors.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores pariatur rem obcaecati voluptas laboriosam."
        />

        <AnimatedShowCardsInView
          initial="100%"
          title="Haircut & beard trim"
          image="/icons/scissors.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores pariatur rem obcaecati voluptas laboriosam."
        />
      </div>
    </main>
        <footer>
            <button className="border-2 border-p-yellow p-2 text-p-yellow font-bold">Explore Now</button>
        </footer>
    </section>
  )
}
